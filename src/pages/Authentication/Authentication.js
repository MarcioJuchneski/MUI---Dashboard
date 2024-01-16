import React, { useState } from "react";
import BasicCard from "../../components/Common/BasicCard/BasicCard";
import SearchBar from "../../components/Common/SearchBar/SearchBar";
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, IconButton, Typography } from "@mui/material";
import CommonButton from "../../components/Common/CommonButton/CommonButton";
import GridWrapper from "../../components/Common/GridWrapper/GridWrapper";
import { cardHeaderStyles } from "./styles";
import NewUserModal from "../../components/Modals/NewUserModal/NewUserModal";


const Authentication = () => {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchResults, SetSearchResults] = useState(users);

    const getHeader = () => {
        const handleSearch = (value) => {
            filterData(value);
        };

        const filterData = (value) => {
            const lowerCasedValue = value.toLowerCase().trim();
            if(lowerCasedValue === '') setUsers(searchResults);
            else {
                const filteredData = searchResults.filter((item) => {
                    return Object.keys(item).some((key) => 
                    item[key].toString().toLowerCase().includes(lowerCasedValue)
                    );
                });
                setUsers(filteredData)
            };
        };

        const addUser = () => {
            setOpen(true);
        };

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar
                    placeholder="Search by email address, phone number, or user UID"
                    onChange={(event) => handleSearch(event.target.value)}
                    SearchBarWidth='720px'
                />
                <Box>
                    <CommonButton
                        variant="contained"
                        onClick={addUser}
                        size="large"
                        sx={cardHeaderStyles.addUserButton}
                    >
                        Add user
                    </CommonButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
    };

    const addNewUser = (data) => {
        users.push({...data});
        setOpen(false);
    }

    const getContent = () => (
        <>
            {
                users.length ?
                users.map((user) => (
                    <Box sx={{marginBottom: '20px'}}>
                        <Typography>User ID: {user.userId}</Typography>
                        <Typography>Email: {user.email}</Typography>
                        <Typography>Phone Number: {user.phoneNumber}</Typography>
                    </Box>
                )):
                <Typography
                    align="center"
                    sx={{margin: '40px 16px', color:'rgba(0,0,0,0.6', fontSize: '1.3rem'}}
                >
                    No users for this project yet
                </Typography>
            }
        </>
    );

    return(
        <GridWrapper>
            <BasicCard 
            header={getHeader()}
            content={getContent()}
            />
            <NewUserModal open={open} onClose={() => setOpen(false)} addNewUser={addNewUser}/>
        </GridWrapper>
    )
}

export default Authentication