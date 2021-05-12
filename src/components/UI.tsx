import "../styles/UI.css"

interface InputProps {
  label: string
  error: string | null
  valid: boolean
  name: string
  type: string
  onChange(e: any): void
}

export const Input = ({ label, error, valid, ...props }: InputProps) => {
  return (
    <div className="Input-wrapper">
      <input
        {...props}
        className={[
          "Input",
          error !== null ? "Input-error" : "",
          valid ? "Input-success" : "",
        ].join(" ")}
      />
      <label className="Input-label">{label}</label>
      <span className="Input-message">{error}</span>
    </div>
  )
}
