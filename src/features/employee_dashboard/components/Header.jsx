import { useAuth } from "../../../hooks/useAuth";

const Header = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className="p-4">
                <h1 className="text-indigo-700">Hello...</h1>
                <h1 className="mb-3 font-serif font-bold">
                    {user?.username?.firstname || ''} {user?.username?.lastname || ''}
                </h1>
            </div>
        </div>
    );
};

export default Header;
