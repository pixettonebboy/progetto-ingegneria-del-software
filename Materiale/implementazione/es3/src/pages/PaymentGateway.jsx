import React, { useState, useEffect } from "react";

function PaymentGateway() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 secondo di caricamento

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Stili CSS iniettati per gestire animazioni e reset di base */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border-left-color: #09f;
          animation: spin 1s linear infinite;
        }
       /* .blurred-amount {
          filter: blur(5px);
          user-select: none;
        }*/
      `}</style>

      {isLoading ? (
        /* Schermata di Caricamento Iniziale */
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f8f9fa",
          fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        }}>
          <div className="spinner" style={{ marginBottom: "20px" }}></div>
          <p style={{
            fontSize: "18px",
            color: "#495057",
            fontWeight: "500",
            textAlign: "center",
            padding: "0 20px"
          }}>
            Ti stiamo reindirizzando al gestore esterno dei pagamenti...
          </p>
        </div>
      ) : (
        /* Schermata del Gestore di Pagamento (Finto Gateway Reale) */
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f4f6f8",
          fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          padding: "20px"
        }}>
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            width: "100%",
            maxWidth: "450px",
            padding: "30px",
            boxSizing: "border-box"
          }}>
            {/* Header del Gateway */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #e9ecef",
              paddingBottom: "15px",
              marginBottom: "25px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "20px" }}>🔒</span>
                <span style={{ fontWeight: "700", color: "#1a253c", fontSize: "18px", letterSpacing: "-0.5px" }}>
                  Secure<span style={{ color: "#0066cc" }}>Pay</span> External
                </span>
              </div>
              <span style={{ fontSize: "12px", color: "#28a745", backgroundColor: "#e8f5e9", padding: "4px 8px", borderRadius: "4px", fontWeight: "600" }}>
                Connessione Sicura
              </span>
            </div>

            {/* Box Importo Sfocato */}
            <div style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div>
                <p style={{ margin: 0, fontSize: "13px", color: "#6c757d", textTransform: "uppercase", letterSpacing: "0.5px" }}>Importo da pagare</p>
                <p style={{ margin: 0, fontSize: "15px", fontWeight: "600", color: "#495057" }}>Transazione ID: #PAY-83921</p>
              </div>
              <div style={{ textAlign: "right" }}>
                {/* L'importo è offuscato tramite la classe CSS blurred-amount */}
                <span className="blurred-amount" style={{ fontSize: "24px", fontWeight: "700", color: "#212529" }}>
                  € 40,00
                </span>
              </div>
            </div>

            {/* Form di Pagamento Carta */}
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "500", color: "#495057" }}>
                  Titolare della carta
                </label>
                <input 
                  type="text" 
                  placeholder="Nome Cognome" 
                  style={{
                    width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1px solid #ced4da", fontSize: "14px", boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "500", color: "#495057" }}>
                  Numero della carta
                </label>
                <div style={{ position: "relative" }}>
                  <input 
                    type="text" 
                    maxLength="19"
                    placeholder="4000 1234 5678 9010" 
                    style={{
                      width: "100%", padding: "10px 12px", paddingRight: "40px", borderRadius: "6px", border: "1px solid #ced4da", fontSize: "14px", boxSizing: "border-box"
                    }}
                  />
                  <span style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "18px" }}>💳</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "15px", marginBottom: "25px" }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "500", color: "#495057" }}>
                    Scadenza
                  </label>
                  <input 
                    type="text" 
                    placeholder="MM/AA" 
                    maxLength="5"
                    style={{
                      width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1px solid #ced4da", fontSize: "14px", boxSizing: "border-box"
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "500", color: "#495057" }}>
                    CVV / CVC
                  </label>
                  <input 
                    type="password" 
                    placeholder="***" 
                    maxLength="3"
                    style={{
                      width: "100%", padding: "10px 12px", borderRadius: "6px", border: "1px solid #ced4da", fontSize: "14px", boxSizing: "border-box"
                    }}
                  />
                </div>
              </div>

              {/* Pulsante di Conferma */}
              <button 
                type="submit" 
                style={{
                  width: "100%",
                  backgroundColor: "#0066cc",
                  color: "#ffffff",
                  border: "none",
                  padding: "14px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.2s"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#0052a3"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#0066cc"}
              >
                Paga in Sicurezza
              </button>
            </form>

            {/* Footer di conformità */}
            <div style={{
              marginTop: "25px",
              textAlign: "center",
              fontSize: "12px",
              color: "#6c757d",
              lineHeight: "1.5"
            }}>
              <p style={{ margin: "0 0 5px 0" }}>PCI-DSS Compliant • Crittografia SSL a 256 bit</p>
              <p style={{ margin: 0 }}>Verificato da Visa / Mastercard Identity Check</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentGateway;