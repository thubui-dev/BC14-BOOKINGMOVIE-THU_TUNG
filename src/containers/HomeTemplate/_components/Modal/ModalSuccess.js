import React from "react";

export default function HandleSuccess(content, TurnOff) {
    return () => {
        return (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    zIndex: "100",
                    position: "fixed",
                    backgroundColor: "#eeeeeeb5",
                    top: 0,
                    lefth: 0,
                }
                }
            >
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        background: "#ffff",
                        padding: "40px 60px",
                        boxShadow: "0 0 20px 0 #000",
                        borderRadius: "14px",
                    }}
                >
                    <div>
                        <p>{content}</p>
                    </div>
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => {
                                TurnOff();
                            }}
                            style={{
                                width: '100px',
                                height: '34px',
                                color: '#fff',
                                border: 'none',
                                backgroundColor: 'red',
                            }}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div >
        );
    };
}
