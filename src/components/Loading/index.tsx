import React from "react";
import "./loading.css";
import { createPortal } from "react-dom";

export function Loading() {
  return (
    <div className="container-loader">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
}

function LoadingPortal() {
  return createPortal(<Loading />, document.body);
}

type LoadingWrapperProps = {
  children: React.ReactNode;
  isLoading?: boolean;
};

export function LoadingWrapper({ children, isLoading }: LoadingWrapperProps) {
  return (
    <React.Fragment>
      {children}
      {isLoading && <LoadingPortal />}
    </React.Fragment>
  );
}
