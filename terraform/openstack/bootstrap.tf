# Script to run at initialization time (one time only)
#
data "template_cloudinit_config" "canada_ca" {
  part {
    filename     = "install-docker.cfg"
    content_type = "text/part-handler"
    content      = "${file("install-docker.sh")}"
  }
}
