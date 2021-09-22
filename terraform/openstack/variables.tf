# Register variables to be used.  Pass the --var-file <file> to the "terraform apply" command
# to set these.  See https://learn.hashicorp.com/tutorials/terraform/sensitive-variables.
#
# Example (example.tfvars)
# 
# os_username = "username"
# os_password = "password"
# os_keypair  = "my-keypair-in-openstack"
#
variable "os_username" {
  description = "OpenStack Username"
  type        = string
  sensitive   = true
}

variable "os_password" {
  description = "OpenStack Password"
  type        = string
  sensitive   = true
}

variable "os_keypair" {
    description = "OpenStack SSH Key Pair name"
    type        = string
    sensitive   = true
}
