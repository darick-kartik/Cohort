import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add to Wishlist
  const addToWishlist = (product) => {
    const existingProduct = wishlist.find(
      (item) => item.id === product.id
    );

    if (existingProduct) return;

    setWishlist([...wishlist, product]);
  };

  // Remove from Wishlist
  const removeFromWishlist = (id) => {
    setWishlist(
      wishlist.filter((item) => item.id !== id)
    );
  };

  // Check if Product Exists
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  // Clear Wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  // Wishlist Count
  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export default WishlistProvider;