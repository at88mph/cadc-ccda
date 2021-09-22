# Configure the OpenStack Provider
provider "openstack" {
  user_name      = var.os_username
  tenant_id      = "50cd1624b5384ecc8f6fe627ef5fc24d"
  password       = var.os_password
  auth_url       = "https://arbutus.cloud.computecanada.ca:5000"
  user_domain_name = "CANFAR"
  region         = "RegionOne"
  endpoint_type  = "publicURL"
}
