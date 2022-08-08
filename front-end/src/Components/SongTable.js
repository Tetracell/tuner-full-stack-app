import React, { useState } from "react";
import { Song } from "./Song";
import axios from "axios";
import Link from "@material-ui/core";

/* To Do 
    - Favorite button clickable to toggle between favorite or not
    - Edit button brings you to do songs individual edit page
*/

// MUI Imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const API_KEY = process.env.REACT_APP_API_URL;

const handleFavorite = (id, name, artist, album, time, is_favorite) => {
  // In here, do a PUT that changes the favorite status of the song
};

export const SongTable = ({ songs }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minwidth: 650 }} aria-label="Song Playlist">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Album</TableCell>
            <TableCell>Song Length</TableCell>
            <TableCell>Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map((song) => {
            return (
              <TableRow key={song.id}>
                {/* <TableCell>{song.name}</TableCell>
                <TableCell>{song.artist}</TableCell>
                <TableCell>{song.album}</TableCell>
                <TableCell>{song.time}</TableCell> */}
                <Song song={song} />
                <TableCell>
                  <Button
                    onClick={() => {
                      const fav = !song.is_favorite ? "true" : "false";
                      axios.put(`${API_KEY}/songs/${song.id}`, {
                        name: song.name,
                        artist: song.artist,
                        album: song.album,
                        time: song.time,
                        is_favorite: fav,
                      });
                    }}
                  >
                    {song.is_favorite ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button href="">Edit</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
