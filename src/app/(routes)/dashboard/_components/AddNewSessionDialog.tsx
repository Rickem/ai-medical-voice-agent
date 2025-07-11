"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const AddNewSessionDialog = () => {
  const [note, setNote] = useState<string>();
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="mt-3">+ Start a consultation</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Basic Details</DialogTitle>
            <DialogDescription asChild>
              <div className="space-y-3">
                <h2>Add Symptoms Or Any Other Details</h2>
                <Textarea
                  placeholder="Add details here"
                  className="h-[200px]"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button variant={"outline"}>Cancel</Button>
            </DialogClose>
            <Button disabled={!note}>
              Next <ArrowRight />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewSessionDialog;
