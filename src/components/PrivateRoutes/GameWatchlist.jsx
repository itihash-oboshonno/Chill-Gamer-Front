import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const GameWatchlist = () => {
    const {currentUser} = useContext(AuthContext);
    const wishMail = currentUser.email;
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/wishlist?searchParams=${wishMail}`)
        .then(res => res.json())
        .then(data => {
            setFetchedData(data)
        })

    }, [wishMail])

    return (
        <div>
            {
                fetchedData ? <div><p>{fetchedData.length}</p></div> : <div><p>You haven't added any games to your watchlist yet.</p></div>
            }
        </div>
    );
};

export default GameWatchlist;