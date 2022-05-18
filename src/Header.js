import { useState } from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";

function Header() {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);

    const resetInput = () => {
        setSearchInput("");

    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <header>
            <div className='header'>
                <Link to='/'>
                    <img
                        className="header__icon"
                        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                        alt=""
                    />
                </Link>

                <div className='header__center'>
                    <input value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text" placeholder='Where are u going?' />
                    <SearchIcon />
                    
                </div>

                <div className='header__right'>
                    <p>Become a host</p>
                    <LanguageIcon />
                    <ExpandMoreIcon />
                    <button onClick={() => navigate('/LoginPage')} variant='outlined' className='r2'>
                        <MenuIcon />
                        <Avatar />
                    </button>
                </div>
            </div>
            {searchInput && (
                <div className='hsa'>
                    <DateRangePicker ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={"#FD5B61"}
                        onChange={handleSelect}
                    />
                    <div className='head'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>

                        <PeopleIcon className='h-5' />
                        <input value={noOfGuests}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            type='number'
                            min={1}
                            className='w-12 pl-2 text-lg outline-none text-red-400' />
                    </div>
                    <div className='head'>
                        <button onClick={resetInput}>Cancel</button>
                        <button onClick={() => navigate('/search')}>Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header