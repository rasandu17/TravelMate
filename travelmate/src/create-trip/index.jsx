import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelersList } from "@/constants/options";
import React, { useEffect, useState } from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { toast } from "sonner";

function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = () => {
    if (
      (formData?.noOfDays > 5 && !formData?.location) ||
      !formData?.noOfDays ||
      !formData?.budget ||
      !formData?.people
    ) {
      toast("Please fill all details", {
        style: {
          background: "white",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          color: "#374151",
        },
      });

      return;
    }
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences 🗺️</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice? 🏕️
          </h2>
          <ReactGoogleAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            onPlaceSelected={(place) => {
              setPlace(place);
              handleInputChange("location", place.formatted_address);
            }}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter a location"
            options={{
              types: ["(cities)"],
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip? 📅
          </h2>
          <Input
            placeholder="Enter number of days"
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                  ${formData.budget === item.title && "shadow-lg border-black"}
                  `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelersList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("people", item.people)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                  ${formData.people === item.people && "shadow-lg border-black"}
                  `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button onClick={onGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
