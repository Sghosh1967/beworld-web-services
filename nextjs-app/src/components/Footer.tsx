"use client";

import { useState } from "react";
import Modal from "./Modal";
import PrivacyPolicyContent from "./modals/PrivacyPolicyContent";
import TermsOfServiceContent from "./modals/TermsOfServiceContent";
import DisclaimerContent from "./modals/DisclaimerContent";
import SocialLinks from "./SocialLinks";

interface FooterProps {
  showSocialLinks?: boolean;
}

export default function Footer({ showSocialLinks = false }: FooterProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <>
      <footer>
        <div className="container">
          <div className={`footer-content${showSocialLinks ? " footer-with-social" : ""}`}>
            <ul className="footer-links">
              <li>
                <button onClick={() => setActiveModal("privacy")}>Privacy Policy</button>
              </li>
              <li>
                <button onClick={() => setActiveModal("terms")}>Terms of Service</button>
              </li>
              <li>
                <button onClick={() => setActiveModal("disclaimer")}>Disclaimer</button>
              </li>
            </ul>
            {showSocialLinks && <SocialLinks />}
            <div className="made-in-india">
              <span>&#127470;&#127475;</span>
              <span>Proudly Made in India</span>
            </div>
          </div>
          <p style={{ marginTop: "1rem", opacity: 0.8 }}>
            &copy; 2024 BeWorld Web Services Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>

      <Modal
        isOpen={activeModal === "privacy"}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
      >
        <PrivacyPolicyContent />
      </Modal>

      <Modal
        isOpen={activeModal === "terms"}
        onClose={() => setActiveModal(null)}
        title="Terms of Service"
      >
        <TermsOfServiceContent />
      </Modal>

      <Modal
        isOpen={activeModal === "disclaimer"}
        onClose={() => setActiveModal(null)}
        title="Disclaimer"
      >
        <DisclaimerContent />
      </Modal>
    </>
  );
}
