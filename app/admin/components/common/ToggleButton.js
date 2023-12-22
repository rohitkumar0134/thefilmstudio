import { useState } from "react";

export default function ToggleButton({ handleToggle, isChecked, _id }) {

    return (
        // <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex justify-center gap-2">
            <span className="text-sm font-medium text-gray-900">
                        {isChecked ? "ON" : "OFF"}
                    </span>
                
                <label class="inline-flex relative items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isChecked}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            
                            handleToggle(_id,isChecked);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer bg-red-500 peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 "
                    ></div>
                </label>
            </div>
        // </div>
    );
}