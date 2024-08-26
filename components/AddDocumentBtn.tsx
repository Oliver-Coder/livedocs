"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { creatDocument } from "@/lib/actions/room.actions";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const AddDocumentHandler = async () => {
    try {
      creatDocument({ userId, email });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="submit"
      onClick={AddDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image src="/assets/icons/add.svg" alt="add" width={24} height={24} />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
};

export default AddDocumentBtn;
