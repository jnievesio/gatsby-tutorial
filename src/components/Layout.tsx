import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto">
            <Navbar />
            <div className="content mt-[180px] grid h-screen place-items-center">{children}</div>
            <footer className="bg-red-500 w-screen h-[210px]">
                <p className="text-red-500">Copyright 2023</p>
            </footer>
        </div>
    );
}
