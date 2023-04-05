import React from "react";
// components
// import Card from "../components/ProductLandingPage/Cards/Card"
import Hero from "../components/ProductLandingPage/Hero/Hero";
import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
// constants
import { SWFW_HERO_CONTENT, SWFW_METADATA } from "../constants/swfw";

export default function SWFWLandingPage() {
  return (
    <Layout description={SWFW_METADATA.description} title={SWFW_METADATA.title}>
      <Hero
        anchorLink={SWFW_HERO_CONTENT.anchorLink}
        header={SWFW_HERO_CONTENT.header}
        product={SWFW_HERO_CONTENT.product}
        sliderCards={SWFW_HERO_CONTENT.sliderCards}
        subheader={SWFW_HERO_CONTENT.subheader}
      />
      <div className="providers-container">
        <div className="container">
          <Tabs>
            <TabItem className="swfw-tabs__item-aws" label="aws" value="aws">
              {/* AWS Cards */}
              {/* 3 sections
              - Software Firewall Reference Architectures with Terraform
              - Deploy your own Software Firewall architecture with Terraform
              - Configure your Software Firewall with Terraform
              */}
              <h2>Software Firewall Reference Architectures with Terraform</h2>
              <div className="card-container">
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">AWS VM-Series</h3>
                  <p className="card-item__description">
                    Reference Architectures
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">AWS Cloud NGFW</h3>
                  <p className="card-item__description">
                    Reference Architectures
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
              </div>
              <h2>
                <strong>Deploy</strong> your own Software Firewall architecture
                with Terraform
              </h2>
              <div className="card-container">
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">VM-Series</h3>
                  <h3 className="card-item__title">AWS Modules v0.4.1</h3>
                  <div className="card-item__footer-logos"></div>
                </div>
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">Cloud NGFW</h3>
                  <h3>AWS Modules v?.?.?</h3>
                  <div className="card-item__footer-logos"></div>
                </div>
              </div>
              <h2>
                <strong>Configure</strong> your Software Firewall with Terraform
              </h2>
              <div className="card-container">
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">VM-Series</h3>
                  <h3 className="card-item__title">AWS Modules v0.4.1</h3>
                  <p className="card-item__description">
                    Define and manage your VM-Series network security
                    configuration as code
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">VM-Series</h3>
                  <h3 className="card-item__title">AWS Modules v0.4.1</h3>
                  <p className="card-item__description">
                    Deploy and configure NGFW functionality as a cloud-native
                    service
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
              </div>
            </TabItem>
            <TabItem
              className="swfw-tabs__item-azure"
              label="azure"
              value="azure"
            >
              {/* Azure */}
              <h2>Software Firewall Reference Architectures with Terraform</h2>
              <div className="card-container">
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">Azure VM-Series</h3>
                  <p className="card-item__description">
                    Reference Architectures
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">Azure Cloud NGFW</h3>
                  <p className="card-item__description">
                    Reference Architectures
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
              </div>
              <h2>
                <strong>Deploy</strong> your own Software Firewall architecture
                with Terraform
              </h2>
              <div className="card-container">
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">VM-Series</h3>
                  <h3 className="card-item__title">Azure Modules v0.4.1</h3>
                  <div className="card-item__footer-logos"></div>
                </div>
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">Cloud NGFW</h3>
                  <h3>Azure Modules v?.?.?</h3>
                  <div className="card-item__footer-logos"></div>
                </div>
              </div>
              <h2>
                <strong>Configure</strong> your Software Firewall with Terraform
              </h2>
              <div className="card-container">
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">VM-Series</h3>
                  <h3 className="card-item__title">Azure Modules v0.4.1</h3>
                  <p className="card-item__description">
                    Define and manage your VM-Series network security
                    configuration as code
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">VM-Series</h3>
                  <h3 className="card-item__title">Azure Modules v0.4.1</h3>
                  <p className="card-item__description">
                    Deploy and configure NGFW functionality as a cloud-native
                    service
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
              </div>
            </TabItem>
            <TabItem className="swfw-tabs__item-gcp" label="gcp" value="gcp">
              {/* GCP */}
              <h2>Software Firewall Reference Architectures with Terraform</h2>
              <div className="card-container">
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">GCP VM-Series</h3>
                  <p className="card-item__description">
                    Reference Architectures
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">GCP Cloud NGFW</h3>
                  <p className="card-item__description">
                    Reference Architectures
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
              </div>
              <h2>
                <strong>Deploy</strong> your own Software Firewall architecture
                with Terraform
              </h2>
              <div className="card-container">
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">VM-Series</h3>
                  <h3 className="card-item__title">GCP Modules v0.4.1</h3>
                  <div className="card-item__footer-logos"></div>
                </div>
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">Cloud NGFW</h3>
                  <h3>GCP Modules v?.?.?</h3>
                  <div className="card-item__footer-logos"></div>
                </div>
              </div>
              <h2>
                <strong>Configure</strong> your Software Firewall with Terraform
              </h2>
              <div className="card-container">
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">VM-Series</h3>
                  <h3 className="card-item__title">GCP Modules v0.4.1</h3>
                  <p className="card-item__description">
                    Define and manage your VM-Series network security
                    configuration as code
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
                <div className="card-item info-card-container">
                  <h3 className="card-item__title">VM-Series</h3>
                  <h3 className="card-item__title">GCP Modules v0.4.1</h3>
                  <p className="card-item__description">
                    Deploy and configure NGFW functionality as a cloud-native
                    service
                  </p>
                  <div className="card-item__footer-logos"></div>
                </div>
              </div>
            </TabItem>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}