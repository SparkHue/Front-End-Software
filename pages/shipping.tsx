import MainLayout from "../layouts/Main";
import { IMenuItem } from "../@types/components";
import { GetServerSideProps } from "next";
import { apiClient } from "../lib/api";
import { makeAllMenus } from "../lib/menu";

export default function ShippingPage({
	mainMenu,
	footerMenu,
}: IShippingPageProps) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={"container-xxl"}>
				<h1 className="page-heading page-heading_h1  page-heading_m-h1">
					Shipping
				</h1>
				<div className="text-container">
					<p>
						At SparkHue, we are committed to delivering your orders in a timely
						and efficient manner. We offer three shipping methods to cater to
						your needs: Standard, Express, and Next-Day shipping. Our goal is to
						provide a seamless delivery experience for all our customers across
						Nepal.
					</p>
					<h1>Shipping Methods</h1>
					<ul>
						<li>
							1. Standard Shipping
							<ul>
								<li>
									<b>Delivery Time:</b> 5-7 business days
								</li>
								<li>
									<b>Cost:</b> Free on orders over NPR 5,000; otherwise a flat
									rate of NPR 99
								</li>
								<li>
									Standard shipping is our most economical option, ideal for
									non-urgent orders. Your package will be delivered within 5-7
									business days, ensuring cost-effective delivery without
									compromising on reliability.
								</li>
							</ul>
						</li>
						<li>
							2. Express Shipping
							<ul>
								<li>
									<b>Delivery Time:</b> 3-5 business days
								</li>
								<li>
									<b>Cost:</b> Free on orders over NPR 5,000; otherwise a flat
									rate NPR 149
								</li>
								<li>
									For those who need their orders faster, our Express Shipping
									option ensures delivery within 2-3 business days. This method
									provides a balance between speed and cost, perfect for
									moderately urgent needs.
								</li>
							</ul>
						</li>
						<li>
							3. Next Day Shipping
							<ul>
								<li>
									<b>Delivery Time:</b> Next business day
								</li>
								<li>
									<b>Cost:</b> Free on orders over NPR 5,000; otherwise a flat
									rate NPR 199
								</li>
								<li>
									For urgent orders, our Next-Day Shipping guarantees delivery
									on the next business day. This premium option is designed for
									customers who need their items as quickly as possible.
								</li>
							</ul>
						</li>
					</ul>
					<h2>Shipping Policies</h2>
					<ul>
						<li>
							<b>Order Processing:</b> Orders are processed and dispatched
							within 1-2 business days. You will receive a confirmation email
							with tracking information once your order has been shipped.
						</li>
						<li>
							<b>Delivery Areas:</b> We deliver to all major cities and towns
							across Nepal. For remote areas, delivery times may vary slightly.
							Please contact our customer support for specific delivery
							information for your location.
						</li>
						<li>
							<b>Tracking Your Order:</b> Once your order is shipped, you will
							receive a tracking number via email. You can use this number to
							track the status of your shipment online.
						</li>
						<li>
							<b>Delivery Attempts:</b> Our delivery partners will attempt to
							deliver your package up to two times. If the delivery is
							unsuccessful after two attempts, the package will be returned to
							our warehouse, and we will contact you to arrange for redelivery
							or cancellation.
						</li>
						<li>
							<b>Shipping Address:</b> Please ensure that the shipping address
							provided at checkout is accurate and complete. SparkHue is not
							responsible for delays or lost packages due to incorrect or
							incomplete addresses.
						</li>
					</ul>
					<h3>Additional Information</h3>
					<ul>
						<li>
							<b>Packaging:</b> All orders are carefully packaged to ensure that
							your items arrive in perfect condition. We use eco-friendly
							packaging materials wherever possible to reduce our environmental
							impact.
						</li>
						<li>
							<b>Customs and Duties:</b> For international orders, please note
							that customs duties, taxes, and other fees may apply. These
							charges are the responsibility of the customer and will be
							collected by the carrier upon delivery.
						</li>
					</ul>
					<h4>Contact Us</h4>
					<p>
						If you have any questions or need assistance with your shipment, our
						customer support team is here to help. You can reach us at
						{" "}<a href="mailto:support@sparkhue.shop">support@sparkhue.shop</a> or call us at <a href="tel:+977 9817785629">+977 9817785629</a>. We are
						available Monday to Friday, from 9:00 AM to 6:00 PM.
					</p>

					<p>
						Thank you for choosing <strong>SparkHue</strong>. We look forward to
						delivering your orders swiftly and securely!
					</p>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<
	IShippingPageProps
> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({
		menu: "category",
	});

	const menus = makeAllMenus({ categoryTree });

	return {
		props: {
			...menus,
		},
	};
};

interface IShippingPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}
