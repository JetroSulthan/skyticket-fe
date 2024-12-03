import React, { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { toast } from "react-toastify";

const SelectSeat = () => {
    const methods = useFormContext();
    const { update } = useFieldArray({
        control: methods.control,
        name: "passengers",
    });

    const [currentPassengerIndex, setCurrentPassengerIndex] = useState(0);

    // Generate seat layout data
    const rows = Array.from({ length: 12 }, (_, i) => i + 1);
    const leftColumns = ["A", "B", "C"];
    const rightColumns = ["D", "E", "F"];

    // Predefined unavailable seats
    const unavailableSeats = new Set([]);

    // Special seats (P1, P2)
    const specialSeats = {};

    // Get all selected seats across passengers
    const getAllSelectedSeats = () => {
        return methods
            .getValues("passengers")
            .map((p) => p.selected_seat)
            .filter(Boolean);
    };

    const handleSeatSelect = (seatId) => {
        const allSelectedSeats = getAllSelectedSeats();

        // If seat is already selected by current passenger, unselect it
        if (
            methods.getValues(
                `passengers.${currentPassengerIndex}.selected_seat`
            ) === seatId
        ) {
            update(currentPassengerIndex, {
                ...methods.getValues(`passengers.${currentPassengerIndex}`),
                selected_seat: "",
            });
            return;
        }

        // If seat is already taken by another passenger
        if (allSelectedSeats.includes(seatId)) {
            toast.error("This seat is already taken by another passenger");
            return;
        }

        // Assign seat to current passenger
        update(currentPassengerIndex, {
            ...methods.getValues(`passengers.${currentPassengerIndex}`),
            selected_seat: seatId,
        });
    };

    const getSeatColor = (seatId) => {
        if (unavailableSeats.has(seatId)) return "bg-gray-300";
        if (specialSeats[seatId]) return "bg-purple-600";

        
        const currentPassengerSeat = methods.getValues(
            `passengers.${currentPassengerIndex}.selected_seat`
        );

        
        const allSelectedSeats = getAllSelectedSeats();
        if (seatId === currentPassengerSeat) return "bg-purple-600";
        if (allSelectedSeats.includes(seatId)) return "bg-red-500";

        return "bg-green-400 hover:bg-green-500";
    };

    return (
        <div className="w-full max-w-2xl border border-gray-300 rounded-lg">
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">Pilih Kursi</h2>
                <div className="bg-green-400 text-white p-4 rounded-lg mb-8 text-center">
                    <h3 className="text-xl font-semibold">
                        Economy - 64 Seats Available
                    </h3>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="grid gap-2">
                        {/* Column headers */}
                        <div className="grid grid-cols-7 gap-2">
                            <div className="col-span-3 grid grid-cols-3">
                                {leftColumns.map((col) => (
                                    <div
                                        key={col}
                                        className="text-center font-semibold"
                                    >
                                        {col}
                                    </div>
                                ))}
                            </div>
                            <div /> 
                            <div className="col-span-3 grid grid-cols-3">
                                {rightColumns.map((col) => (
                                    <div
                                        key={col}
                                        className="text-center font-semibold"
                                    >
                                        {col}
                                    </div>
                                ))}
                            </div>
                        </div>

                        
                        {rows.map((row) => (
                            <div key={row} className="grid grid-cols-7 gap-2">
                                
                                <div className="col-span-3 grid grid-cols-3 gap-2">
                                    {leftColumns.map((col) => {
                                        const seatId = `${col}${row}`;
                                        return (
                                            <button
                                                key={seatId}
                                                type="button"
                                                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold transition-colors ${getSeatColor(
                                                    seatId
                                                )}`}
                                                onClick={() =>
                                                    handleSeatSelect(seatId)
                                                }
                                                disabled={
                                                    unavailableSeats.has(
                                                        seatId
                                                    ) || specialSeats[seatId]
                                                }
                                            >
                                                {unavailableSeats.has(seatId)
                                                    ? "X"
                                                    : specialSeats[seatId] ||
                                                      seatId}
                                            </button>
                                        );
                                    })}
                                </div>

                                
                                <div className="flex items-center justify-center font-semibold">
                                    {row}
                                </div>

                                
                                <div className="col-span-3 grid grid-cols-3 gap-2">
                                    {rightColumns.map((col) => {
                                        const seatId = `${col}${row}`;
                                        return (
                                            <button
                                                key={seatId}
                                                type="button"
                                                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold transition-colors ${getSeatColor(
                                                    seatId
                                                )}`}
                                                onClick={() =>
                                                    handleSeatSelect(seatId)
                                                }
                                                disabled={
                                                    unavailableSeats.has(
                                                        seatId
                                                    ) || specialSeats[seatId]
                                                }
                                            >
                                                {unavailableSeats.has(seatId)
                                                    ? "X"
                                                    : specialSeats[seatId] ||
                                                      seatId}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectSeat;
