# Create VM instances to contain the Ray cluster
resource "openstack_compute_instance_v2" "canada_ca" {
  availability_zone = "Persistent_01"
  count             = 1
  flavor_name       = "p2-3gb"
  image_id          = "a810b3e6-6e3e-4ec6-b6dc-cc42d2849ad9"
  key_pair          = var.os_keypair
  name              = "canada_ca"
  security_groups   = ["default", "web"]

  # This user_data content (template_cloudinit_config clause) is in the bootstrap.tf file
  user_data         = "${data.template_cloudinit_config.canada_ca.rendered}"

  network {
    name            = "cadc-network"
    uuid            = "bd77726c-558f-4f08-b309-5eeba1f1df25"
  }
}

# Reserve a floating IP from the pool
resource "openstack_networking_floatingip_v2" "floatip" {
  pool              = "Public-Network"
  region            = "RegionOne"
}

resource "openstack_compute_floatingip_associate_v2" "floatip" {
  floating_ip       = "${openstack_networking_floatingip_v2.floatip.address}"

  # Assign a floating IP to the first instance started
  instance_id       = "${openstack_compute_instance_v2.canada_ca[0].id}"
}
