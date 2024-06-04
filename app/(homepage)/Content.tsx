'use client';

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Pagination from "@/app/components/Pagination";
import Link from "next/link";
import useSWR from 'swr';
import { HomepageSkeleton } from "@/app/components/Skeletons";
import { AnimeList } from "@/app/lib/definitions";
import Empty from "@/app/components/Empty";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'

export default function Content() {
  const queryParams = useSearchParams();
  const page = queryParams.get('page') || 1;
  const query = queryParams.get('query') || "";

  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR(`https://api.jikan.moe/v4/anime?page=${page}&q=${query}`, fetcher);

  const isError = data?.error || error;
  const listData = data?.data;
  const pagination = data?.pagination;
  const isDataExist = listData && listData.length > 0;

  return (
    <Container>
      {isError && (
        <Empty
          message="Something wrong with the server :("
          subMessage="Please check back later"
        />
      )}

      {isLoading && (
        <HomepageSkeleton />
      )}

      {isDataExist && (
        <>
          <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
            {listData.map((anime: AnimeList) => (
              <Grid key={anime.mal_id} item xs={6} sm={4} md={2.4}>
                <Link href={`/details/${anime.mal_id}`}>
                  <Box
                    sx={{
                      height: { xs: "220px", sm: "300px" },
                      borderRadius: "8px",
                      position: "relative",
                      mb: 1,
                    }}
                  >
                    <Image
                      src={anime.images.webp.image_url}
                      alt={anime.title}
                      fill
                      style={{ borderRadius: "8px" }}
                      objectFit="cover"
                    />
                  </Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="white" fontSize="small">{anime.title}</Typography>
                    <Typography color="white" fontSize="small">{anime.score}</Typography>
                  </Stack>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Pagination
            totalPage={Math.ceil(pagination.items.total / pagination.items.per_page)}
            currentPage={pagination.current_page}
          />
        </>
      )}
    </Container>
  );
}
