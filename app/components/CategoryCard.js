// app/components/CategoryCard.js
"use client"; // Add this line at the top

import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import styled from '@emotion/styled';

const categories = [
  { name: 'Beauty', imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?fit=crop&w=600&h=400' },
  { name: 'Fragrances', imageUrl: 'https://images.unsplash.com/photo-1718466044521-d38654f3ba0a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWVzfGVufDB8fDB8fHww' },
  { name: 'Furniture', imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?fit=crop&w=600&h=400' },
  { name: 'Groceries', imageUrl: 'https://plus.unsplash.com/premium_photo-1661320812120-5ee4d44fc720?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const StyledCard = styled(Card)`
  min-width: 275px;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const StyledMedia = styled(CardMedia)`
  height: 140px;
`;

const CategoryCard = ({ category }) => {
  return (
    <StyledCard>
      <StyledMedia
        image={category.imageUrl}
        title={category.name}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {category.name}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

const CategoryCards = () => {
  return (
    <Grid container spacing={3}>
      {categories.map((category, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <CategoryCard category={category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryCards;