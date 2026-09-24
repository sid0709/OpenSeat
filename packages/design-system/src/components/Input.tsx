"use client";

import {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  forwardRef,
  useId,
  useState,
} from "react";

interface BaseFieldProps {
  label?: string;
  helper?: string;
  error?: boolean;
  /** error paints the field and helper; success keeps the value and adds a confirmation. */
  tone?: "error" | "success";
  /** Quiet supporting line under the label, before the control. */
  description?: string;
  /** Leading slot — an icon or a unit such as "$". */
  start?: ReactNode;
  /** Trailing slot — a unit, status, or action. */
  end?: ReactNode;
  /** Shows a clear control when the field has a value. */
  hasClear?: boolean;
  size?: FieldSize;
  /** Caps length and shows a count. Counts user-perceived characters. */
  maxLength?: number;
}

export interface InputFieldProps
  extends BaseFieldProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "size" | "maxLength"> {
  multiline?: false;
}

export interface TextareaFieldProps
  extends BaseFieldProps,
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "size" | "maxLength"> {
  multiline: true;
}

export type FieldProps = InputFieldProps | TextareaFieldProps;

/** Shared control scale. `sm` is the previous 32px field; `md` is the default. */
export type ControlSize = "sm" | "md" | "lg";
export type FieldSize = ControlSize;

const SIZE_CLASS: Record<FieldSize, string> = {
  sm: "os-control-sm",
  md: "os-control-md",
  lg: "os-control-lg",
};

function characterCount(value: string) {
  return [...value].length;
}

/** Label above a bordered control. Size changes the height; the chrome stays the same. */
export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, FieldProps>(
  function Input(
    {
      label,
      helper,
      error,
      tone,
      description,
      start,
      end,
      hasClear,
      size = "md",
      multiline,
      id,
      value,
      defaultValue,
      onChange,
      disabled,
      readOnly,
      placeholder,
      maxLength,
      ...rest
    },
    ref
  ) {
    const autoId = useId();
    const fieldId = id ?? autoId;
    const helperId = `${fieldId}-helper`;
    const text = value == null ? "" : String(value);
    const count = characterCount(text);
    const overLimit = maxLength != null && count > maxLength;
    const showError = Boolean(error || tone === "error" || overLimit);
    const showSuccess = tone === "success" && !showError;
    const [uncontrolled, setUncontrolled] = useState(defaultValue == null ? "" : String(defaultValue));
    const current = value != null ? text : uncontrolled;
    const canClear = Boolean(hasClear && !disabled && !readOnly && current.length > 0);

    const shellClass = [
      "os-control",
      SIZE_CLASS[size],
      multiline && "os-control-multiline",
      showError && "os-control-error",
      showSuccess && "os-control-success",
      disabled && "os-control-disabled",
      readOnly && "os-control-readonly",
    ]
      .filter(Boolean)
      .join(" ");

    function handleChange(
      event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) {
      if (value == null) setUncontrolled(event.target.value);
      onChange?.(event as never);
    }

    function clear() {
      const event = {
        target: { value: "" },
        currentTarget: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>;
      if (value == null) setUncontrolled("");
      onChange?.(event as never);
    }

    const shared = {
      id: fieldId,
      className: "os-control-input",
      placeholder,
      disabled,
      readOnly,
      "aria-invalid": showError || undefined,
      "aria-describedby": helper || maxLength != null ? helperId : undefined,
      onChange: handleChange,
    };

    return (
      <div className="os-field-group">
        {label && (
          <label className="os-field-label" htmlFor={fieldId}>
            {label}
          </label>
        )}
        {description && <p className="os-field-description">{description}</p>}
        <div className={shellClass}>
          {start && <span className="os-control-adornment">{start}</span>}
          {multiline ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              rows={4}
              value={value as TextareaHTMLAttributes<HTMLTextAreaElement>["value"]}
              defaultValue={value == null ? defaultValue : undefined}
              {...shared}
              {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              value={value as InputHTMLAttributes<HTMLInputElement>["value"]}
              defaultValue={value == null ? defaultValue : undefined}
              {...shared}
              {...(rest as InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
          {canClear && (
            <button type="button" className="os-control-clear" onClick={clear} aria-label="Clear">
              ×
            </button>
          )}
          {end && <span className="os-control-adornment">{end}</span>}
        </div>
        {(helper || maxLength != null) && (
          <div className="os-field-meta" id={helperId}>
            {helper && (
              <span className={showError ? "os-field-helper-error" : "os-field-helper"}>{helper}</span>
            )}
            {maxLength != null && (
              <span className={overLimit ? "os-field-helper-error" : "os-field-count"}>
                {count}/{maxLength}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);
