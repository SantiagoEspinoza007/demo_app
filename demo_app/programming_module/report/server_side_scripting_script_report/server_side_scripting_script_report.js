// Copyright (c) 2025, Santiago and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Server Side Scripting Script Report"] = {
	"filters": [
		{
			"fieldname": "name",
			"label": __("Server Side Scripting"),
			"fieldtype": "Link",
			"options": "Server Side Scripting",
		},
		{
			"fieldname": "date_of_birth",
			"label": __("Date of Birth"),
			"fieldtype": "Date",
		},
		{
			"fieldname": "age",
			"label": __("Age"),
			"fieldtype": "Data",
		},
	]
};
