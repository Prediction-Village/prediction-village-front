import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import React from "react";

export interface Option {
  label: string;
  chance: string;
}

export interface PredictionCardProps {
  title: string;
  badge: React.ReactNode;
  description: string;
  probability?: string;
  change?: { value: string; positive: boolean };
  options?: Option[];
  onYes?: () => void;
  onNo?: () => void;
  onSelect?: (option: Option, answer: boolean) => void;
}

export function PredictionCard({
  title,
  badge,
  description,
  probability,
  change,
  options,
  onYes,
  onNo,
  onSelect,
}: PredictionCardProps) {
  const isYesNo = probability !== undefined && change !== undefined;

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          {badge}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent>
        {isYesNo && probability && change ? (
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">{probability}</span>
              <span className="text-xs text-muted-foreground">
                Current probability
              </span>
            </div>
            <div
              className={`flex items-center space-x-1 rounded-md px-2 py-1 ${
                change.positive
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {change.positive ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">{change.value}</span>
            </div>
          </div>
        ) : (
          options?.map((opt) => (
            <div
              key={opt.label}
              className="flex items-center justify-between rounded-md border p-2"
            >
              <div className="flex flex-col">
                <span className="font-medium">{opt.label}</span>
                <span className="text-xs text-muted-foreground">
                  {opt.chance} chance
                </span>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onSelect?.(opt, false)}
                >
                  No
                </Button>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => onSelect?.(opt, true)}
                >
                  Yes
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>

      {isYesNo && (
        <CardFooter className="flex justify-between border-t pt-4">
          <Button variant="outline" className="w-[48%]" onClick={onNo}>
            No
          </Button>
          <Button
            className="w-[48%] bg-green-600 hover:bg-green-700"
            onClick={onYes}
          >
            Yes
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
