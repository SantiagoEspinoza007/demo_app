frappe.ready(function() {
	// bind events here

	// frappe.web_form.after_load = () => {
	// 	frappe.msgprint("Plesae fill all values carefuly");
	// }

	frappe.web_form.after_load = () => {
		frappe.web_form.on('enable', (field, value) => {
			frappe.msgprint('Hi User');
		});

		frappe.web_form.on("date_of_birth", (field, value) => {
			if (value) {
				date_of_birth = new Date(value);
				var today = new Date();
				var age = Math.floor((today - date_of_birth) / (365.25 * 24 * 60 * 60 * 1000));
				frappe.web_form.set_value("age", [age]);

			}
		});
	}
	// frappe.web_form.validate = () => {
	// 	email_id = frappe.web_form.get_value("email_id");

	frappe.web_form.validate = () => {
		email_id = frappe.web_form.get_value("email");
		var pattern = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\W+)*\.\W+([-.]\W+)*$/;
		if(!pattern.test(email_id) && email_id){
			frappe.msgprint("Enter a valid email address");
			return false;
		}

		mobileNum = frappe.web_form.get_value("mobile_no");
		var validateMobNum = /^\d*(?:\.\d{1,2})?$/;
		if(!validateMobNum.test(mobileNum) && mobileNum){
			frappe.msgprint("Enter a valid mobile number");
			return false;
		}
		
		return true;
	}

})