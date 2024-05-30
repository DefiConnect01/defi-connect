import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { Button, Col, Row, Modal } from "react-bootstrap";
import { FaGreaterThan } from "react-icons/fa";
import { Campaign } from "@bandit-network/react";
import heroImage from "./../../asset/images/hero.svg";
// import { ConnectButton } from '@rainbow-me/rainbowkit'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBanditCampaign = () => setIsOpen(!isOpen);
  const toggleBanditClose = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);
  

  return (
    <section
      className="container-fluid hero-section"
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className="visually-hidden">
        Crypto Borrowing Platform
      </h1>
      <Row
        className="justify-content-between align-items-center pt-5 overflow-hidden"
        style={{ marginTop: 100 }}
      >
        <Col sm={12} md={7}>
          <Slide direction="left">
            <div>
              <h2 className="fs-head">
                Fastest & Secure Platform to{" "}
                <strong className="colorBlue me-2">BORROW</strong> your crypto.
              </h2>
              <p className="fs-subhead fw-light">
                Borrow without selling your crypto with rates as low as 0% and
                no extra fees. Just top up and your credit line is immediately
                available.
              </p>
              <div className="d-flex gap-2">
                <Button className="fw-bold w-10">
                  <a
                    href="https://deficonnect-credit-lendapp.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white d-flex align-items-center"
                  >
                    BORROW NOW
                    <FaGreaterThan className="ms-2" />
                  </a>
                </Button>
                <Button variant="primary" onClick={toggleBanditCampaign}>
                  Get Started
                </Button>
              </div>
            </div>
          </Slide>
        </Col>
        <Col sm={12} md={5} className="mt-3 mt-md-0">
          <Slide direction="left">
            <img
              src={heroImage}
              className="hero img-fluid"
              alt="Hero visual representation"
            />
          </Slide>
        </Col>
      </Row>
      <Campaign
        campaignId={529}
        displayMode="modal"
        isOpen={isOpen}
        onClose={toggleBanditClose}
        render={({
          campaign,
          isLoading,
          campaignQuery,
          openApp,
          userCampaignStatusQuery,
        }) => {
          // console.log(campaign)
          return(
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={isOpen}
              onHide={toggleBanditClose}
              backdrop="static"
            >
              <Modal.Header closeButton className="py-2">
                <div className="d-flex align-items-center">
                  <img
                    src={campaign?.profile?.image?.profile}
                    alt={campaign?.profile?.name || "Campaign image"}
                    style={{ height: "70px", width: "100px" }}
                    className="img-fluid rounded-4 me-3"
                  />
                  <div>
                    <h5 className="mb-1">{campaign?.profile?.name}</h5>
                    <p className="mb-0 text-muted">
                      {campaign?.profile?.description}
                    </p>
                  </div>
                </div>        
              </Modal.Header>
              <Modal.Body>
                {isLoading && (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
                {!isLoading &&
                  campaign?.segments?.map((seg, index) => (
                    <div key={index} className="mb-3 p-3 border rounded">
                      <h6 className="mb-1 py-2 fs-5 text-primary">{seg.name}</h6>
                      {Array.isArray(seg.actions) &&
                        seg.actions.map((act, inx) => (
                          <div
                            key={inx}
                            className="mb-2 d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <p className="mb-1">{act.name}</p>
                              <p className="text-muted mb-1">{act.description}</p>
                            </div>
                            <Button
                              onClick={() => openApp(seg.id, act.app)}
                              variant="outline-primary"
                              disabled={act?.status?.isCompleted}
                            >
                              {act?.status?.isCompleted ? "Done" : "Open"}
                            </Button>
                          </div>
                        ))}
                    </div>
                  ))}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={toggleBanditClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          )
        }
        
      }
      />
    </section>
  );
};

export default Hero;
