import { useEffect, useState } from "react";
import FriendCard from "./FriendCard";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        // Fetch data from JSON
        const response = await fetch("/friends.json");
        const data = await response.json();
        
        // friends in state
        setFriends(data);
        setLoading(false);
      } catch (error) {
        // Log in fetch
        console.error("Error loading friends:", error);
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading friends...</div>;
  }

  return (
    <section className="py-12 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* display a card */}
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
}
