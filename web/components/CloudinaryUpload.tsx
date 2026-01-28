"use client";

import { CldUploadWidget, type CloudinaryUploadWidgetInfo } from "next-cloudinary";

type Props = {
    children: (props: { open: () => void }) => React.ReactNode;
    onUpload?: (info: CloudinaryUploadWidgetInfo) => void;
};

export default function CloudinaryUpload({ children, onUpload }: Props) {
    return (
        <CldUploadWidget
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
            onUpload={onUpload}
        >
            {({ open }) => children({ open })}
        </CldUploadWidget>
    );
}
