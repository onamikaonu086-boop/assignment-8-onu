"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAnimalDetailsById } from "@/lib/data";
import { authClient } from "@/lib/auth-client"; 
import toast from "react-hot-toast";

export default function AnimalDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    
    const [animal, setAnimal] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });

    useEffect(() => {
        const fetchAnimal = async () => {
            const data = await getAnimalDetailsById(id);
            setAnimal(data);
        };
        fetchAnimal();
    }, [id]);

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/login");
            toast.error("Please login to book an animal!");
        }
    }, [session, isPending, router]);

    const handleBooking = (e) => {
        e.preventDefault();
        toast.success(`Successfully booked ${animal?.name}!`);
        setFormData({ name: "", email: "", phone: "", address: "" });
    };

    if (!animal) return <div className="text-center py-20 text-gray-500">Loading details...</div>;

    return (
        <div className="container max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                
         
                <div>
                    <img src={animal.image} alt={animal.name} className="w-full h-80 object-cover rounded-2xl mb-6 shadow-md" />
                    <h1 className="text-4xl font-black text-gray-900 mb-2">{animal.name}</h1>
                    <p className="text-2xl font-bold text-orange-600 mb-6">৳{animal.price.toLocaleString()}</p>
                    
                    <div className="space-y-4 text-gray-700 bg-gray-50 p-6 rounded-2xl">
                        <p><strong>Breed:</strong> {animal.breed}</p>
                        <p><strong>Weight:</strong> {animal.weight} kg</p>
                        <p><strong>Age:</strong> {animal.age} Years</p>
                        <p><strong>Location:</strong> {animal.location}</p>
                        <p><strong>Category:</strong> {animal.category}</p>
                        <p className="pt-2 italic text-gray-600">{animal.description}</p>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Booking Form</h2>
                    <form onSubmit={handleBooking} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
                            <input type="text" required className="w-full p-3 rounded-xl border border-gray-200" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                            <input type="email" required className="w-full p-3 rounded-xl border border-gray-200" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                            <input type="tel" required className="w-full p-3 rounded-xl border border-gray-200" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Delivery Address</label>
                            <textarea required rows="3" className="w-full p-3 rounded-xl border border-gray-200" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}></textarea>
                        </div>
                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition shadow-lg">
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}