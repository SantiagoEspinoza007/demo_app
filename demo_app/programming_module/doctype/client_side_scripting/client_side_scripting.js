// Copyright (c) 2025, Santiago and contributors
// For license information, please see license.txt

frappe.ui.form.on("Client Side Scripting", {
  //refresh: function(frm) {
  //frappe.msgprint("Hello Santiago from 'refresh' event");
  //},

  // onload: function(frm) {
  // 	//frappe.msgprint("Hello Santiago from 'onload' event");
  // },

  // validate: function(frm) {
  // 	frappe.msgprint("Hello Santiago from 'validate' event");
  // },

  // before_save: function(frm) {
  // 	frappe.throw("Hello Santiago from 'before_save' event");
  // },

  // after_save: function(frm) {
  // 	frappe.throw ("Hello Santiago from 'after_save' event");
  // },

  // enable: function(frm) {
  // 	frappe.msgprint("Hello Santiago from 'enable' event");
  // },

  // age: function(frm) {
  // 	frappe.msgprint("Hello Santiago from 'age' event");
  // },

  // family_members_on_form_rendered: function(frm) {
  // 	frappe.msgprint("Hello Santiago from 'family_members_on_form_rendered' event");
  // },

  // before_submit: function(frm) {
  // 	frappe.throw ("Hello Santiago from 'before_submit' event");
  // },

  // on_submit: function(frm) {
  // 	frappe.msgprint("Hello Santiago from 'on_submit' event");
  // },

  // before_cancel: function(frm) {
  // 	frappe.throw("Hello Santiago from 'before_cancel' event");
  // },

  // on_cancel: function(frm) {
  // 	frappe.msgprint("Hello Santiago from 'on_cancel' event");
  // },

  ////////////////////////////////////////////////////////////////////
  //////////////////////    VALUE FETCHING    ////////////////////////
  ////////////////////////////////////////////////////////////////////

  // frm.doc.first_name

  // after_save: function (frm) {
  //   frappe.msgprint(
  //     __("The full name is '{0}'", [
  //       frm.doc.first_name +
  //         " " +
  //         frm.doc.middle_name +
  //         " " +
  //         frm.doc.last_name,
  //     ])
  //   );

  //   for (let row of frm.doc.family_members) {
  //     frappe.msgprint(
  //       __(
  //         "{0}. The name of the family member is '{1}' and relation is '{2}'",
  //         [row.idx, row.name1, row.relation]
  //       )
  //     );
  //   }
  // },

	// refresh:function(frm){
	// 	// frm.set_intro('Now you can create a new Client Side Scripting doctype')
	// 	if(frm.is_new()){
	// 		frm.set_intro('Now you can create a new Client Side Scripting doctype')
	// 	}
	// }

	//////////////////////////////////////////////////////////////////
	//////////////////////    frm.set_value    ///////////////////////
	//////////////////////////////////////////////////////////////////

	validate:function(frm){
		frm.set_value('full_name', frm.doc.first_name + " " + frm.doc.middle_name + " " + frm.doc.last_name)
		
    // let row = frm.add_child('family_members',{
		// 	name1: 'Lucky',
		// 	relation: 'Pet',
		// 	age: 10
		// })
	}

	//////////////////////////////////////////////////////////////////
	/////////////////////////    Events    ///////////////////////////
	//////////////////////////////////////////////////////////////////

	// enable:function(frm){
		
	// 	frm.set_df_property('first_name', 'reqd', 1)
	// 	frm.refresh_field('first_name');

	// 	frm.set_df_property('middle_name', 'read_only', 1)
	// 	frm.refresh_field('middle_name');

	// 	frm.toggle_reqd('age',true)
	// },

	//////////////////////////////////////////////////////////////////
	/////////////////////////    Button    ///////////////////////////
	//////////////////////////////////////////////////////////////////

	// refresh:function(frm){
	// 	// frm.add_custom_button('Click Me Button', () =>{
	// 	// 	frappe.msgprint(__('You Clicked Me!!'));
	// 	// })
		
	// 	frm.add_custom_button('Click Me1', () =>{
	// 		frappe.msgprint(__('You Clicked 1!!'));
	// 	}, 'click me')

	// 	frm.add_custom_button('Click Me2', () =>{
	// 		frappe.msgprint(__('You Clicked 2!!'));
	// 	}, 'click me')
	// }

});

frappe.ui.form.on("Family Members", {
  ////////////////////////////////////////////////////////////////////
  ////////////////////    CHILD TABLE SCRIPTS    /////////////////////
  ////////////////////////////////////////////////////////////////////
  // name1: function(frm) {
  // 	frappe.msgprint("Hello Santiago from Child DocType 'name1' event");
  // },
  // age(frm, cdt, cdm) {
  // 	frappe.msgprint("Hello Santiago from 'age' Child DocType fieldname event");
  // },
});
