
import React, { useState } from "react";
import Loader from "./Loader";



const LoaderDemo = () => {
    return (
        <div className="row">
            <div
                className=""
                style={{ marginTop: "30px", marginBottom: "30px" }}
            >
                <div
                    style={{
                        marginBottom: "5px",
                        fontWeight: "600",
                        color: "#DA1E28",
                    }}
                >
                    Loader component
                </div>
                <div className="loaderCompContainer" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <Loader
                        size="default"
                        loaderText="Loading, please wait…"
                        loaderTextColor="#000000"
                        loaderTextPosition="bottom"
                        isPercentageEnabled={false}
                    />
                    <Loader
                        size="default"
                        loaderText="Loading, please wait…"
                        loaderTextColor="#000000"
                        loaderTextPosition="bottom"
                        isPercentageEnabled={true}
                        percentageValue="40%"
                    />
                    <Loader
                        size="medium"
                        loaderText="Loading, please wait…"
                        loaderTextColor="#000000"
                        loaderTextPosition="bottom"
                        isPercentageEnabled={false}
                    />
                    <Loader
                        size="mini"
                        loaderText="Loading, please wait…"
                        loaderTextColor="#000000"
                        loaderTextPosition="bottom"
                        isPercentageEnabled={false}
                    />
                    <Loader
                        size="mini"
                        loaderText="Loading, please wait…"
                        loaderTextColor="#000000"
                        loaderTextPosition="right"
                        isPercentageEnabled={false}
                    />
                    <div className="tableLoaderParent" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div className="tableLoader" style={{
                            border: "1px solid #EAEAEC",
                            borderRadius: "6px",
                            boxShadow: "0px 3px 5px #0000000d",
                            background: "#FFFFFF",
                            padding: "20px 50px 25px 50px",
                            width: "300px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Loader
                                size="medium"
                                loaderText="Loading, please wait…"
                                loaderTextColor="#000000"
                                loaderTextPosition="center"
                                isPercentageEnabled={false}
                            // percentageValue="40%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoaderDemo;