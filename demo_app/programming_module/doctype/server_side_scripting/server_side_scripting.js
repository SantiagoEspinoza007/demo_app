// Copyright (c) 2025, Santiago and contributors
// For license information, please see license.txt

frappe.ui.form.on('Server Side Scripting', {
	// refresh: function(frm) {

	// }
	//////////////////////////////////////////////////////////////////
	/////////////////////////13. Server Side Call ///////////////////////////
	//////////////////////////////////////////////////////////////////

	// enable: function(frm) {
	// 	frm.call({
	// 		doc: frm.doc,
	// 		method: "frm_call",
	// 		args: {
	// 			msg: "Hello"
	// 		},
	// 		freeze: true,
	// 		freeze_message: ("Calling frm call method"),
	// 		callback: function(r) {
	// 			// frappe.msgprint(r.message)
				
	// 			// frappe.msgprint("Server Side calling Commpleated");

	// 			// frm.refresh_field('medication_orders');
	// 		}
	// 	})
	// }

	//////////////////////////////////////////////////////////////////
	/////////////////////////13. Server Side Call ///////////////////////////
	//////////////////////////////////////////////////////////////////

	enable: function(frm) {
		frappe.call({
			method: "demo_app.programming_module.doctype.client_side_scripting.client_side_scripting.frappe_call",
			args: {
				msg: "Hello"
			},
			freeze: true,
			freeze_message: __("Calling frappe_call method"),
			callback: function(r) {
				frappe.msgprint(r.message)
			}
		})
	}

	
});
