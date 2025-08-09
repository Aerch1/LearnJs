import { NavLink, Link, useLocation } from "react-router-dom";
import { useMemo, useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  User,
  LogOut,
  Settings,
  LogIn,
  UserPlus,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";

function UserMenu({ user, onLogout, compact = false }: { user?: any; onLogout?: () => Promise<void> | void; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const initial = user?.name ? String(user.name).charAt(0).toUpperCase() : null;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={`flex items-center gap-2 rounded-md border border-gray-200 bg-white px-2 py-1.5 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 ${compact ? "w-full justify-between" : ""}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          {user?.avatarUrl ? (
            <img src={user.avatarUrl} alt={user.name || "User avatar"} className="h-full w-full object-cover" />
          ) : initial ? (
            <span className="text-sm font-medium text-gray-700">{initial}</span>
          ) : (
            <User className="h-4 w-4 text-gray-600" />
          )}
        </div>
        <span className="text-sm text-gray-700 max-w-[10rem] truncate">{user?.name || "User"}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute right-0 mt-2 w-80 rounded-md bg-white shadow-xl origin-top-right transform transition ${
          open ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
        }`}
        role="menu"
      >
        {user ? (
          <div className="py-3 border border-gray-200 rounded-md">
            <div className="flex items-start gap-3 px-4">
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                {user?.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.name || "User avatar"} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-sm font-medium text-gray-700">{(user?.name || "U").charAt(0).toUpperCase()}</span>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user?.name || "User"}</p>
                {user?.title && <p className="text-xs text-gray-500 truncate">{user.title}</p>}
              </div>
            </div>

            <div className="my-3 h-px bg-gray-200" />

            <div className="flex flex-col">
              <NavLink to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setOpen(false)}>
                <User className="h-4 w-4" /> View Profile
              </NavLink>
              <NavLink to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setOpen(false)}>
                <Settings className="h-4 w-4" /> Account Settings
              </NavLink>
            </div>

            <div className="my-3 h-px bg-gray-200" />

            <div className="flex flex-col">
              <NavLink to="/appointments" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setOpen(false)}>
                <MessageSquare className="h-4 w-4" /> Manage Appointments
              </NavLink>
              <NavLink to="/messages" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setOpen(false)}>
                <MessageSquare className="h-4 w-4" /> Messages
              </NavLink>
            </div>

            <div className="my-3 h-px bg-gray-200" />

            <button
              onClick={async () => { setOpen(false); try { await onLogout?.(); } catch { /* noop */ } }}
              className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" /> Log Out
            </button>
          </div>
        ) : (
          <div className="py-2 border border-gray-200 rounded-md">
            <NavLink to="/login" className={({isActive}) => `flex items-center gap-2 px-4 py-2 text-sm transition ${isActive ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setOpen(false)}>
              <LogIn className="h-4 w-4" /> Login
            </NavLink>
            <NavLink to="/signup" className={({isActive}) => `flex items-center gap-2 px-4 py-2 text-sm transition ${isActive ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setOpen(false)}>
              <UserPlus className="h-4 w-4" /> Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Header({ user, onLogout }: { user?: any; onLogout?: () => Promise<void> | void }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileOpen ? "hidden" : "";
    }
  }, [mobileOpen]);

  const { servicesActive, aboutActive } = useMemo(() => {
    const path = location.pathname || "/";
    return {
      servicesActive: path.startsWith("/services"),
      aboutActive: path.startsWith("/about"),
    };
  }, [location.pathname]);

  const baseLink = "transition text-gray-700 hover:text-secondary";
  const activeLink = "text-secondary font-medium";
  const navLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? `${baseLink} ${activeLink}` : baseLink);

  return (
    <header className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logotest1.webp" alt="Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop nav (≥lg only) */}
          <nav className="hidden lg:flex items-center gap-6 relative">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>

            {/* Services */}
            <div className="relative group">
              <button
                type="button"
                className={`flex items-center gap-1 ${servicesActive ? activeLink : "text-gray-700"} transition group-hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-md px-1.5 py-1`}
                aria-haspopup="menu"
                aria-expanded={servicesActive || undefined}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white text-gray-900 shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:visible group-focus-within:opacity-100 transition duration-200 z-20 border border-gray-200">
                <NavLink to="/services/one" className={({isActive}) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"}`}>Service 1</NavLink>
                <NavLink to="/services/two" className={({isActive}) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"}`}>Service 2</NavLink>
              </div>
            </div>

            {/* About */}
            <div className="relative group">
              <button
                type="button"
                className={`flex items-center gap-1 ${aboutActive ? activeLink : "text-gray-700"} transition group-hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-md px-1.5 py-1`}
                aria-haspopup="menu"
                aria-expanded={aboutActive || undefined}
              >
                <span>About</span>
                <ChevronDown className="w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white text-gray-900 shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:visible group-focus-within:opacity-100 transition duration-200 z-20 border border-gray-200">
                <NavLink to="/about/mission" className={({isActive}) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"}`}>Our Mission</NavLink>
                <NavLink to="/about/team" className={({isActive}) => `block px-4 py-2 text-sm transition ${isActive ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"}`}>Our Team</NavLink>
              </div>
            </div>

            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink to="/event" className={navLinkClass}>Event</NavLink>
          </nav>

          {/* Desktop user/auth (≥lg only) */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <UserMenu user={user} onLogout={onLogout} />
            ) : (
              <>
                <NavLink to="/login" className="text-sm text-gray-700 hover:text-secondary transition">Login</NavLink>
                <Link to="/signup" className="bg-secondary hover:opacity-90 text-white px-4 py-2 rounded-md text-sm transition inline-flex items-center">Sign Up</Link>
              </>
            )}
          </div>

          {/* Mobile toggle (<lg) */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-white border-t border-gray-200 transition-transform duration-200 ${mobileOpen ? "translate-y-0" : "translate-y-full"}`}
        aria-hidden={!mobileOpen}
      >
        <div className="h-full overflow-y-auto">
          <nav className="px-4 py-4">
            <div className="flex flex-col divide-y divide-gray-200">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block px-2 py-3 text-base ${isActive ? "bg-gray-50 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`
                }
                onClick={() => setMobileOpen(false)}
              >
                Home
              </NavLink>

              {/* Services accordion */}
              <div className="">
                <button
                  className="w-full flex items-center justify-between px-2 py-3 text-left text-gray-700 hover:bg-gray-50"
                  onClick={() => setServicesOpen(v => !v)}
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div id="mobile-services" className="border-t border-gray-200">
                    <NavLink to="/services/one" className={({isActive}) => `block px-3 py-3 text-base ${isActive ? "bg-gray-50 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setMobileOpen(false)}>Service 1</NavLink>
                    <NavLink to="/services/two" className={({isActive}) => `block px-3 py-3 text-base ${isActive ? "bg-gray-50 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setMobileOpen(false)}>Service 2</NavLink>
                  </div>
                )}
              </div>

              {/* About accordion */}
              <div className="">
                <button
                  className="w-full flex items-center justify-between px-2 py-3 text-left text-gray-700 hover:bg-gray-50"
                  onClick={() => setAboutOpen(v => !v)}
                  aria-expanded={aboutOpen}
                  aria-controls="mobile-about"
                >
                  <span>About</span>
                  <ChevronDown className={`h-4 w-4 transition ${aboutOpen ? "rotate-180" : ""}`} />
                </button>
                {aboutOpen && (
                  <div id="mobile-about" className="border-t border-gray-200">
                    <NavLink to="/about/mission" className={({isActive}) => `block px-3 py-3 text-base ${isActive ? "bg-gray-50 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setMobileOpen(false)}>Our Mission</NavLink>
                    <NavLink to="/about/team" className={({isActive}) => `block px-3 py-3 text-base ${isActive ? "bg-gray-50 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setMobileOpen(false)}>Our Team</NavLink>
                  </div>
                )}
              </div>

              <NavLink to="/contact" className={({isActive}) => `block px-2 py-3 text-base ${isActive ? "bg-gray-50 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setMobileOpen(false)}>Contact</NavLink>
              <NavLink to="/event" className={({isActive}) => `block px-2 py-3 text-base ${isActive ? "bg-gray-50 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`} onClick={() => setMobileOpen(false)}>Event</NavLink>

              <div className="pt-2">
                <div className="border-t border-gray-200 py-3">
                  {user ? (
                    <UserMenu user={user} onLogout={onLogout} compact />
                  ) : (
                    <div className="flex items-center gap-3">
                      <NavLink to="/login" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setMobileOpen(false)}>Login</NavLink>
                      <Link to="/signup" className="px-3 py-2 text-sm bg-secondary text-white rounded-md" onClick={() => setMobileOpen(false)}>Sign Up</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}