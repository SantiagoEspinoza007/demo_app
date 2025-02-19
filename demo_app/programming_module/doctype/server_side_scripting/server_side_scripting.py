# Copyright (c) 2025, Santiago and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document

class ServerSideScripting(Document):

	# def validate(self):
	# 	frappe.msgprint("Hello Frappe from 'validate' event")
 
	# def before_save(self):
	# 	frappe.throw("Hello Frappe from 'before_save' event ")

	# def before_insert(self):
	# 	frappe.throw("Hello Frappe from 'before_insert' event")

	# def after_insert(self):
	# 	frappe.throw("Hello Frappe from 'after_insert' event")
  
	# def on_update(self):
	# 	frappe.msgprint("Hello Frappe from 'on_update' event")

	# def before_submit(self):
	# 	frappe.msgprint("Hello Frappe from 'before_submit' event")
  
	# def on_submit(self):
	# 	frappe.msgprint("Hello Frappe from 'on_submit' event")
  
	# def on_cancel(self):
	# 	frappe.msgprint("Hello Frappe from 'on_cancel' event")
  
	# def on_trash(self):
	# 	frappe.msgprint("Hello Frappe from 'on_trash' event")
 
	# def after_delete(self):
	# 	frappe.msgprint("Hello Frappe from 'after_delete' event")
 
############################################################################################################
############################################ 2 VALUE FETCHING ##############################################
############################################################################################################

	# def validate(self):
	# 	frappe.msgprint(_("Hello My full name is '{0}' ").format(
    #   		self.first_name + " " + self.middle_name + " " + self.last_name))

	# def validate(self):
	# 	for row in self.get ("family_members"):
	# 		frappe.msgprint(_("{0}. The family member is '{1}' and relation is '{2}'").format(
	# 			row.idx,row.name1,row.relation))
	
 
############################################################################################################
####################################### 3. frappe get_doc(doctype, name) ###################################
############################################################################################################

# Returns a document of the specified doctype and name.
 
	# def validate(self):
	# 	self.get_document()
  
	# def get_document(self):
	# 	doc = frappe.get_doc("Client Side Scripting", self.client_side_doc)
	# 	frappe.msgprint(_("The first name is '{0}' and Age is '{1}'").format(
	# 		doc.first_name, doc.age))

	# 	for row in doc.get("family_members"):
	# 		frappe.msgprint(_(
    #    			"{0}. The family member is '{1}' and relation is '{2}'").format(
	# 			row.idx,row.name1,row.relation))
 
 
############################################################################################################
######################################### 4. frappe.new_doc(doctype) #######################################
############################################################################################################
# Create a new Document

	# frappe.new_doc(doctype)
	
	# def validate(self):
	# 	self.new_document()
  
	# def new_document(self):
	# 	doc = frappe.new_doc("Client Side Scripting")
	# 	doc.first_name = "Gabriela"
	# 	doc.last_name = "Carrion"
	# 	doc.age = 20
	# 	doc.append("family_members", {
	# 		"name1": "Toby",
	# 		"relation": "Pet",
	# 		"age": 6
	# 	})
	# 	doc.insert()
 
############################################################################################################
####################################### 5. frappe.delete(doctype, name) ####################################
############################################################################################################
# Delete a document
 
	# def validate(self):
	# 	frappe.delete_doc("Client Side Scripting", 'PR-00008')
  

############################################################################################################
############################################ 6. Document Methods ###########################################
############################################################################################################
# Document Methods are the methods that are defined in the class of the doctype.

### doc.insert()

	# def validate(self):
	# 	self.new_document()

	# def new_document(self):
	# 	doc = frappe.new_doc("Client Side Scripting")
	# 	doc.first_name = "Gabriela"
	# 	doc.middle_name = "Stefania"
	# 	doc.last_name = "Carrion"
	# 	doc.age = 20
	# 	doc.insert()
  
### Some escape hatches that can be sed to skip certain checks

	# doc.insert(
	# 	ignore_permissions=True, # Ignore write permissions during insert
	# 	ignore_links=True, # Ignore link validations in the document
	# 	ignore_if_duplicate=True, # Dont insert if DuplicateEntryError is raised
  	# 	ignore_mandatory=True, # Insert even if mandatory fields are not set 
	# )

### doc.save()

	# def validate(self):
	# 	self.save_document()

	# def save_document(self):
	# 	doc = frappe.new_doc("Client Side Scripting")
	# 	doc.first_name = "Joel"
	# 	doc.middle_name = "Alejandro"
	# 	doc.last_name = "Velasquez"
	# 	doc.age = 20
	# 	doc.save()
  
	# 	doc.save(
	# 		ignore_permissions=True, # Ignore write permissions during insert
	# 		ignore_version=True, # Do not create a version record
	# 	)

### doc.delete()

	# def validate(self):
	# 	self.delete_document()
 
	# def delete_document(self):
	# 	doc = frappe.get_doc("Client Side Scripting", 'PR-00012')
	# 	doc.delete()

### doc.db_set()

	# def validate(self):
	# 	self.db_set_document()

	# def db_set_document(self):
	# 	doc = frappe.get_doc("Client Side Scripting", 'PR-00011')
	# 	doc.db_set('first_name', 'Joel Alejandro')
	# 	doc.db_set('age', 25)
	# 	doc.db_set('last_name', 'Velasquez')

############################################################################################################
############################################## 7. Get List #################################################
############################################################################################################

### frappe.db.get list(doctype, filters, or filters, fields, order by, group by, start, page, length, ignore_permissions, as_dict, debug)

	# def validate(self):
	# 	self.get_list()

	# def get_list(self):
	# 	doc = frappe.db.get_list("Client Side Scripting",
    #         	filters={
    #              	'enable': 1
    #             }, 
    #          	fields=['first_name', 'age']
    #         	)
	# 	for d in doc:
	# 		frappe.msgprint(_("The Parent first name is {0} and Age is {1}").format(
	# 			d.first_name, d.age))

############################################################################################################
########################################### 8. get_value() #################################################
############################################################################################################

### frappe.db.get_value(doctype, name, fieldname) or frappe.db.get_value(doctype, filters, fieldname)

	# def validate(self):
	# 	self.get_value()
 
	# def get_value(self):
	# 	first_name, age = frappe.db.get_value("Client Side Scripting", 'PR-00011', ['first_name', 'age'])
	# 	frappe.msgprint(_("The first name is {0} and Age is {1}").format(
	# 		first_name, age))


############################################################################################################
########################################### 9. set_value() #################################################
############################################################################################################

### frappe.db.set_value(doctype, name, fieldname, value)

	# def validate(self):
	# 	self.set_value()
 
	# def set_value(self):
	# 	frappe.db.set_value("Client Side Scripting", 'PR-00011', 'age', 40)
	# 	first_name, age = frappe.db.get_value("Client Side Scripting", 'PR-00011', ['first_name', 'age'])
	# 	frappe.msgprint(_("The Parent first name is {0} and new age is {1}").format(
	# 		first_name, age))
 
############################################################################################################
########################################## 10. exists() #################################################
############################################################################################################

### frappe.db.exists(doctype, name)

	# def validate(self):
	# 	if frappe.db.exists("Client Side Scripting", 'PR-00016'): #TRUE
	# 		frappe.msgprint("The document exists in database")
	# 	else:
	# 		frappe.msgprint("The document does not exists in database")

############################################################################################################
########################################## 11. count() #################################################
############################################################################################################

### frappe.db.count(doctype, filters)

	# def validate(self):
	# 	doc_count = frappe.db.count('Client Side Scripting', {'enable': 1}) # True
	# 	frappe.msgprint(_("The enable documents is {0}").format(doc_count))


############################################################################################################
########################################## 12. sql() #################################################
############################################################################################################

### frappe.db.sql(query, filters, as_dict)

	# def validate(self):
	# 	self.sql()
  
	# def sql(self):
     
	# 	data = frappe.db.sql("""
	# 							SELECT
    #     							first_name,
    #            						age 
    #                  			FROM 
    #                     			`tabClient Side Scripting`
    #                        		WHERE 
    #                          		enable = 1
	# 						""", as_dict=1)
		
	# 	for d in data:
	# 		frappe.msgprint(_("The Parent first name is {0} and Age is {1}").format(
	# 			d.first_name, d.age))

############################################################################################################
####################################### 13. Server Side Call ###############################################
############################################################################################################
	
	# @frappe.whitelist()
	# def frm_call(self,msg):
	# 	import time
	# 	time.sleep(5)
	# 	# frappe.msgprint(msg)
  
	# 	self.mobile_no = 9993044642

	# 	# return "Hi this message from frm call"
 	

############################################################################################################
####################################### 14. Server Side Call ###############################################
############################################################################################################

	# @frappe.whitelist()
	# def frappe_call(self,msg):
	# 	import time
	# 	time.sleep(5)
	# 	# frappe.msgprint(msg)
  
	# 	return "Hi this message from frappe_call"
 	pass