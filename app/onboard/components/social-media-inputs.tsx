// components/SocialMediaInputs.tsx
import React from "react";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface SocialMediaInputsProps {
  formData: any;
  handleChange: (name: string, value: any) => void;
  errors: any;
}

const SocialMediaInputs: React.FC<SocialMediaInputsProps> = ({
  formData,
  handleChange,
  errors,
}) => (
  <>
    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">
        {errors?.x && <p className="text-red-500 text-xs mt-1">{errors?.x}</p>}Twitter
        
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://twitter.com/stephen-simon"
          onChange={(e) => handleChange("x", e.target.value)}
          value={formData.x}
        />
      </FormControl>
    </FormItem>

    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">
        {errors?.instagram && (
          <p className="text-red-500 text-xs mt-1">{errors?.instagram}</p>
        )}
        Instagram
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://www.instagram.com/stephen-simon"
          onChange={(e) => handleChange("instagram", e.target.value)}
          value={formData.instagram}
        />
      </FormControl>
    </FormItem>

    <FormItem className="items-center justify-center w-full">
      
     
    </FormItem>

    <FormItem className="items-center justify-center w-full">
     
        
    
      
    </FormItem>

    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">
        {errors?.linkedin && (
          <p className="text-red-500 text-xs mt-1">{errors?.linkedin}</p>
        )}
        LinkedIn
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://www.linkedin.com/in/stephen-simon"
          onChange={(e) => handleChange("linkedin", e.target.value)}
          value={formData.linkedin}
        />
      </FormControl>
    </FormItem>
    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">
        {errors?.linkedin && (
          <p className="text-red-500 text-xs mt-1">{errors?.linkedin}</p>
        )}
        Facebook
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://www.facebook.com/in/stephen-simon"
          onChange={(e) => handleChange("facebook", e.target.value)}
          value={formData.fb}
        />
      </FormControl>
    </FormItem>
  </>
);

export default SocialMediaInputs;
