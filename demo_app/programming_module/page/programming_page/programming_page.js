frappe.pages['programming-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Demo Page ',
		single_column: true
	});

	page.set_title('My Page')

	page.set_indicator('Done', 'blue')

	let $btn = page.set_primary_action('New', () => frappe.msgprint('New Button Clicked'))

	let $btnOne = page.set_secondary_action('Refresh', () => frappe.msgprint('Refresh Button Clicked'))

	page.add_menu_item('Send Email', () => frappe.msgprint('Clicked Send Email'))

	page.add_action_item('Delete', () => frappe.msgprint('Clicked Delete'))

	let field = page.add_field({
		fieldname: 'Status',
		label: 'Status',
		fieldtype: 'Select',
		options: [
			'Open',
			'Closed',
			'Pending',
			'Cancelled'
		],
		change() {
			frappe.msgprint(field.get_value())
		}
	});

	// $(frappe.render_template('programing_page', {})).appendTo(page.body);

	$(frappe.render_template("programming_page", {
		data: "Hi Frappe"
	})).appendTo(page.body);
}