"use client";
import React, { useState } from "react";
import { z } from "zod";
import { sendContactEmail } from "@/app/actions/contact";
import { CheckCircle, Download } from "lucide-react";

const LeadForm = ({
  buttonStyle = "default",
  onSuccess,
  isDownloadContext = false,
}: {
  buttonStyle?: "default" | "blue";
  onSuccess?: () => void;
  isDownloadContext?: boolean;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    try {
      const leadFormSchema = z.object({
        phone: z
          .string()
          .min(1, "Phone Number is required")
          .refine(
            (val) => /^\d{7,15}$/.test(val.replace(/[^0-9]/g, "")),
            "Invalid Phone Number",
          ),
        email: z
          .string()
          .min(1, "Email Id is required")
          .email("Invalid Email Id"),
      });

      leadFormSchema.parse({
        phone: formData.phone,
        email: formData.email,
      });
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.errors.forEach((e) => {
          if (e.path[0]) {
            newErrors[e.path[0].toString()] = e.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      const result = await sendContactEmail({
        name: formData.name,
        phone: fullPhone,
        email: formData.email,
        programs: "Amity Online MBA",
        otherInfo: "Lead from Amity Online MBA Landing Page",
      });

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", countryCode: "+91", phone: "", email: "" });

        if (isDownloadContext) {
          // Trigger brochure download
          const link = document.createElement("a");
          link.href = "/amity/amity-mba-brochure.pdf";
          link.download = "Amity-MBA-Brochure.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        if (onSuccess) onSuccess();
      } else {
        setErrors({
          submit: `${result.error || "Unknown"} Error while sumbiting, Please check the field and try again`,
        });
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Unknown";
      setErrors({
        submit: `${errorMsg} Error while sumbiting, Please check the field and try again`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle
            className="text-green-500"
            size={24}
          />
        </div>
        <h3 className="text-green-800 font-bold text-lg mb-2">Thank You!</h3>

        {isDownloadContext ? (
          <>
            <p className="text-green-600 text-sm mb-4">
              Your enquiry has been submitted successfully. Your brochure
              download should start automatically.
            </p>

            <a
              href="/amity/amity-mba-brochure.pdf"
              download="Amity-MBA-Brochure.pdf"
              className="inline-flex items-center gap-2 bg-amity-blue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-900 transition-colors">
              <Download size={16} /> Download Brochure Now
            </a>
          </>
        ) : (
          <p className="text-green-600 text-sm">
            Your enquiry has been submitted successfully. Our team will contact
            you shortly.
          </p>
        )}

        <div className="mt-6">
          <button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="text-xs text-gray-500 hover:text-gray-700 underline">
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  const btnClass =
    buttonStyle === "blue"
      ? "font-raleway w-full bg-amity-blue text-white font-semibold py-3.5 rounded-full text-sm hover:bg-blue-900 transition-colors"
      : "font-raleway w-full bg-amity-yellow text-amity-blue font-bold py-3.5 rounded-full text-sm hover:bg-yellow-400 transition-colors";

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Real-time validation
    if (field === "phone") {
      if (value && !/^\d{7,15}$/.test(value.replace(/[^0-9]/g, ""))) {
        setErrors((prev) => ({ ...prev, phone: "Invalid Phone Number" }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.phone;
          return newErrors;
        });
      }
    }
    if (field === "email") {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid Email Id" }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.email;
          return newErrors;
        });
      }
    }
  };

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-gray-700">Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleFieldChange("name", e.target.value)}
          placeholder="Enter your full name"
          className={`w-full px-4 py-2.5 rounded-xl border ${
            errors.name
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-blue-300"
          } focus:outline-none text-sm`}
        />
        {errors.name && (
          <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>
        )}
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={formData.countryCode}
            onChange={(e) => handleFieldChange("countryCode", e.target.value)}
            placeholder="+91"
            className="w-20 px-2 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-300 text-center shrink-0"
          />
          <div className="flex-1 min-w-0">
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleFieldChange("phone", e.target.value)}
              placeholder="Enter your no."
              className={`w-full px-4 py-2.5 rounded-xl border ${
                errors.phone
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-blue-300"
              } focus:outline-none text-sm`}
            />
          </div>
        </div>
        {errors.phone && (
          <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-gray-700">
          Email Id <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
          placeholder="abc@xyz.com"
          className={`w-full px-4 py-2.5 rounded-xl border ${
            errors.email
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-blue-300"
          } focus:outline-none text-sm`}
        />
        {errors.email && (
          <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>
        )}
      </div>

      <div className="flex items-start gap-3 pt-2">
        <div className="mt-0.5 shrink-0">
          <div className="w-5 h-5 rounded-full border-2 border-amity-blue flex items-center justify-center p-0.5">
            <div className="w-full h-full bg-amity-blue rounded-full"></div>
          </div>
        </div>
        <p className="text-[10px] text-gray-500 leading-tight">
          By entering these details I agree that Amity University Online and its
          associates can contact me with updates & notifications via Email, SMS,
          WhatsApp, and Voice call as per the{" "}
          <a
            href="#"
            className="underline">
            Privacy Policy
          </a>
          . This consent will override any registration for DNC / NDNC.
        </p>
      </div>

      {errors.submit && (
        <p className="text-red-500 text-sm text-center font-medium">
          {errors.submit}
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${btnClass} ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default LeadForm;
