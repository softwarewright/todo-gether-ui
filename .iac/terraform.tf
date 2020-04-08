variable "bucket_name" {
  type = string
}

variable "region" {
    type = string
}

terraform {
    backend "s3"{
        bucket = "us-west-2.softwarewright.terraform-state"
        key    = "todo-gether-state/tf.state"
        region = "us-west-2"
    }
}

provider "aws" {
    version = "~> 2.0"
    region = var.region
}

resource "aws_s3_bucket" "website-bucket" {
    bucket = "${var.region}.${var.bucket_name}"
    acl = "public-read"
    tags = {
        Environment = "prod"
    }

    policy = <<EOF
{
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${var.region}.${var.bucket_name}/*"
        }
    ]
}
EOF
    website {
        index_document = "index.html"
        error_document = "index.html"
    }
}

