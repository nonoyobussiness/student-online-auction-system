/**
 * AppContext - Global state: theme, wallet balance, toast notifications
 */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

/* ─── Types ──────────────────────────────────────── */

export type Theme = "dark" | "light";

export interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

export interface Transaction {
  id: string;
  type: "Bid" | "Purchase" | "Deposit" | "Withdrawal";
  amount: number;
  status: "Completed" | "Pending" | "Failed";
  date: string;
  item?: string;
  isCredit: boolean;
}

export interface Bid {
  id: string;
  itemTitle: string;
  itemImage?: string;
  category: string;
  myBid: number;
  highestBid: number;
  status: "Winning" | "Outbid" | "Won" | "Lost" | "Active";
  endsAt: string;
  condition: "New" | "Like New" | "Used";
}

export interface SaleItem {
  id: string;
  title: string;
  image?: string;
  category: string;
  startingPrice: number;
  finalPrice?: number;
  buyerName?: string;
  status: "Active" | "Sold" | "Expired";
  listedAt: string;
  endsAt: string;
  bidsCount: number;
}

interface AppContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  balance: number;
  setBalance: (b: number) => void;
  toasts: Toast[];
  addToast: (message: string, type?: Toast["type"]) => void;
  removeToast: (id: string) => void;
  transactions: Transaction[];
  bids: Bid[];
  setBids: (b: Bid[]) => void;
  sales: SaleItem[];
  setSales: (s: SaleItem[]) => void;
}

/* ─── Mock Data ──────────────────────────────────── */

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: "t1", type: "Deposit",    amount: 1000, status: "Completed", date: "2026-03-01", isCredit: true },
  { id: "t2", type: "Bid",        amount: 250,  status: "Completed", date: "2026-03-04", item: "MacBook Air M2", isCredit: false },
  { id: "t3", type: "Purchase",   amount: 380,  status: "Completed", date: "2026-03-07", item: "DSLR Camera", isCredit: false },
  { id: "t4", type: "Deposit",    amount: 500,  status: "Completed", date: "2026-03-10", isCredit: true },
  { id: "t5", type: "Bid",        amount: 120,  status: "Completed", date: "2026-03-14", item: "Calculus Textbook", isCredit: false },
  { id: "t6", type: "Withdrawal", amount: 200,  status: "Completed", date: "2026-03-18", isCredit: false },
  { id: "t7", type: "Bid",        amount: 95,   status: "Pending",   date: "2026-03-22", item: "Mechanical Keyboard", isCredit: false },
  { id: "t8", type: "Deposit",    amount: 300,  status: "Completed", date: "2026-04-01", isCredit: true },
];

const MOCK_BIDS: Bid[] = [
  { id: "b1", itemTitle: "MacBook Air M2",       category: "Electronics", myBid: 250, highestBid: 295, status: "Outbid",  endsAt: "2026-04-08", condition: "Like New",  itemImage: "" },
  { id: "b2", itemTitle: "Calculus Textbook",    category: "Books",       myBid: 120, highestBid: 120, status: "Winning", endsAt: "2026-04-09", condition: "Used",      itemImage: "" },
  { id: "b3", itemTitle: "DSLR Camera",          category: "Electronics", myBid: 380, highestBid: 380, status: "Won",     endsAt: "2026-03-07", condition: "Used",      itemImage: "" },
  { id: "b4", itemTitle: "Ergonomic Chair",      category: "Furniture",   myBid: 210, highestBid: 340, status: "Lost",    endsAt: "2026-03-20", condition: "Like New",  itemImage: "" },
  { id: "b5", itemTitle: "Mechanical Keyboard",  category: "Electronics", myBid: 95,  highestBid: 95,  status: "Active",  endsAt: "2026-04-12", condition: "New",       itemImage: "" },
];

const MOCK_SALES: SaleItem[] = [
  { id: "s1", title: "Physics Lab Equipment", category: "Education", startingPrice: 150, finalPrice: 230, buyerName: "Arjun K.", status: "Sold",    listedAt: "2026-03-01", endsAt: "2026-03-08", bidsCount: 7  },
  { id: "s2", title: "Study Desk Lamp",       category: "Furniture", startingPrice: 40,  status: "Active", listedAt: "2026-04-01", endsAt: "2026-04-10", bidsCount: 3  },
  { id: "s3", title: "Python Programming Book", category: "Books",  startingPrice: 60,  status: "Expired", listedAt: "2026-02-10", endsAt: "2026-02-17", bidsCount: 0 },
  { id: "s4", title: "Badminton Racket Set",  category: "Sports",   startingPrice: 80,  finalPrice: 110, buyerName: "Priya M.", status: "Sold", listedAt: "2026-03-15", endsAt: "2026-03-22", bidsCount: 4 },
];

/* ─── Context ────────────────────────────────────── */

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme === "light" ? "light" : "dark";
  });
  const [balance, setBalance] = useState(2700);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [bids, setBids] = useState<Bid[]>(MOCK_BIDS);
  const [sales, setSales] = useState<SaleItem[]>(MOCK_SALES);

  const addToast = useCallback((message: string, type: Toast["type"] = "info") => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme, setTheme,
        balance, setBalance,
        toasts, addToast, removeToast,
        transactions: MOCK_TRANSACTIONS,
        bids, setBids,
        sales, setSales,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
