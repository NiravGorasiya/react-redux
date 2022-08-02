import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import MovieApi from "../../common/apis/MovieApi"
import { APIKey } from "../../common/apis/MovieApiKey"

export const fetchAsyncMovie = createAsyncThunk('movies/fetchAsyncMovie', async (term) => {
    const response = await MovieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`)
        .catch((error) => {
            console.log(error);
        })
    return response.data;
})
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShow", async (term) => {
    const response = await MovieApi.get(`?apikey=${APIKey}&s=${term}&type="series`)
        .catch((error) => {
            console.log(error);
        })
    return response.data
})
export const fetchAsyncMovieorShowsDetail = createAsyncThunk("movies/fetchAsyncMovieorShowsDetail", async (id) => {
    const response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieorObject: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieorObject = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovie.pending]: () => {
            console.log();
        },
        [fetchAsyncMovie.fulfilled]: (state, { payload }) => {
            return { ...state, movies: payload }
        },
        [fetchAsyncMovie.rejected]: () => {
            console.log("reject");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            return { ...state, shows: payload }
        },
        [fetchAsyncMovieorShowsDetail.fulfilled]: (state, { payload }) => {
            return { ...state, selectedMovieorObject: payload }
        }
    }
})


export const { removeSelectedMovieOrShow } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowsDetail = (state) => state.movies.selectedMovieorObject
export default movieSlice.reducer;