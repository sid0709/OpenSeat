"use client";

import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, useId, useState, type ComponentProps } from "react";
import { Token } from "./Content";
import { Input, type ControlSize } from "./Input";

export const Field = Input;
export const TextInput = Input;

export function TextArea(props: Omit<ComponentProps<typeof Input>, "multiline">) {
  return <Input multiline {...props} />;
}

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  size?: ControlSize;
}

export function Checkbox({ label, id, className = "", size = "md", ...props }: CheckboxProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <label className={["body os-check", `os-check-${size}`, className].filter(Boolean).join(" ")} htmlFor={inputId}>
      <input id={inputId} type="checkbox" {...props} />
      {label}
    </label>
  );
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  size?: ControlSize;
}

export function Radio({ label, id, className = "", size = "md", ...props }: RadioProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <label className={["body os-radio", `os-check-${size}`, className].filter(Boolean).join(" ")} htmlFor={inputId}>
      <input id={inputId} type="radio" {...props} />
      {label}
    </label>
  );
}

export interface RadioListProps {
  name: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  size?: ControlSize;
}

export function RadioList({ name, options, value, onChange, size = "md" }: RadioListProps) {
  return (
    <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {options.map((o) => (
        <Radio
          key={o.value}
          name={name}
          label={o.label}
          value={o.value}
          checked={value === o.value}
          size={size}
          onChange={() => onChange(o.value)}
        />
      ))}
    </div>
  );
}

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  size?: ControlSize;
}

export function Switch({ label, id, size = "md", ...props }: SwitchProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <label className={`body os-check os-check-${size}`} htmlFor={inputId}>
      <span className={`os-switch os-switch-${size}`}>
        <input id={inputId} type="checkbox" role="switch" {...props} />
        <span className="os-switch-track" />
      </span>
      {label}
    </label>
  );
}

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  size?: ControlSize;
}

export function Slider({ label, id, size = "md", ...props }: SliderProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className={`os-field-group os-slider-${size}`}>
      {label && <label className="label" htmlFor={inputId}>{label}</label>}
      <input id={inputId} type="range" className="os-slider" {...props} />
    </div>
  );
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  helper?: string;
  error?: boolean;
  size?: ControlSize;
}

export function Select({ label, helper, error, className = "", id, size = "md", children, ...props }: SelectProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className="os-field-group">
      {label && <label className="label" htmlFor={inputId}>{label}</label>}
      <select id={inputId} className={["os-field", `os-field-${size}`, error && "os-field-error", className].filter(Boolean).join(" ")} {...props}>
        {children}
      </select>
      {helper && <span className={"body-sm " + (error ? "os-field-helper-error" : "os-field-helper")}>{helper}</span>}
    </div>
  );
}

export const Selector = Select;

export function NumberInput(props: Omit<ComponentProps<typeof Input>, "type" | "multiline">) {
  return <Input type="number" {...props} />;
}

export function DateInput(props: Omit<ComponentProps<typeof Input>, "type" | "multiline">) {
  return <Input type="date" {...props} />;
}

export { TimeInput } from "./TimeInput";
export type { TimeInputProps, TimeInputVariant, HourCycle, MinuteStep } from "./TimeInput";

export function DateTimeInput(props: Omit<ComponentProps<typeof Input>, "type" | "multiline">) {
  return <Input type="datetime-local" {...props} />;
}

export interface FileInputProps {
  label?: string;
  accept?: string;
  size?: ControlSize;
  onChange?: (files: FileList | null) => void;
}

export function FileInput({ label = "Drop a file or click to browse", accept, size = "md", onChange }: FileInputProps) {
  const [name, setName] = useState<string | null>(null);
  const [over, setOver] = useState(false);

  return (
    <label
      className={["os-file", `os-file-${size}`, over && "os-file-over", name && "os-file-filled"].filter(Boolean).join(" ")}
      onDragOver={(event) => {
        event.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(event) => {
        event.preventDefault();
        setOver(false);
        const files = event.dataTransfer.files;
        setName(files?.[0]?.name ?? null);
        onChange?.(files);
      }}
    >
      <input
        type="file"
        accept={accept}
        onChange={(event) => {
          setName(event.target.files?.[0]?.name ?? null);
          onChange?.(event.target.files);
        }}
      />
      <span className="os-file-mark" aria-hidden>
        ↑
      </span>
      <span className="os-file-title">{name ?? label}</span>
      <span className="os-file-hint">{name ? "Click to replace" : "or click to browse"}</span>
    </label>
  );
}

export function InputGroup({ children }: { children: ReactNode }) {
  return <div className="os-input-group">{children}</div>;
}

export function InputGroupText({ children }: { children: ReactNode }) {
  return <span className="body-sm os-input-group-text">{children}</span>;
}

export interface TokenizerProps {
  tokens: string[];
  onRemove: (token: string) => void;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
}

export function Tokenizer({ tokens, onRemove, value, onChange, onSubmit, placeholder = "Add…" }: TokenizerProps) {
  return (
    <div className="os-tokenizer">
      {tokens.map((t) => (
        <Token key={t} label={t} size="sm" onRemove={() => onRemove(t)} />
      ))}
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && value.trim()) {
            e.preventDefault();
            onSubmit?.(value.trim());
          }
        }}
      />
    </div>
  );
}

export interface TypeaheadProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}

export function Typeahead({ value, onChange, options, placeholder }: TypeaheadProps) {
  const q = value.toLowerCase();
  const matches = q ? options.filter((o) => o.toLowerCase().includes(q)).slice(0, 6) : [];
  return (
    <div className="os-typeahead">
      <input className="os-field" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      {matches.length > 0 && (
        <div className="os-typeahead-list" role="listbox">
          {matches.map((m) => (
            <button key={m} type="button" className="body-sm os-command-item" onClick={() => onChange(m)}>
              {m}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
