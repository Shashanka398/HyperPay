"use client"
import Image, { type ImageProps } from "next/image";
import { MainBar } from "@repo/ui/MainBar";
import PeerToPeer from "components/peerToPeer/PeerToPeer";
import styles from "./page.module.css";

export default function Page() {

  return(
    <PeerToPeer/>
  )
}