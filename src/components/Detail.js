import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  // Array of extra details for rendering
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <>
      <Stack
        gap="60px"
        sx={{ mt: '20px', flexDirection: { lg: 'row' }, p: '15px', alignItems: 'center' }}
      >
        {/* Display Exercise Image */}
        <img
          src={gifUrl}
          alt={name}
          loading="lazy"
          className="detail-image"
          style={{
            border: '4px solid black',
            borderRadius: '10px',
          }}
        />
        <Stack sx={{ gap: { lg: '30px', xs: '20px' } }}>
          {/* Exercise Title */}
          <Typography variant="h3">{name}</Typography>

          {/* Exercise Description */}
          <Typography variant="h6">
            Exercises keep you strong. {name} is one of the best exercises to target your{' '}
            {target}. It will help you improve your mood and gain energy.
          </Typography>

          {/* Render Extra Details */}
          {extraDetail.map((item, index) => (
            <Stack
              key={index} // Use `index` as fallback if no other unique identifier
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: '#fff2db',
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name} // Use item.name for better alt accuracy
                  style={{ width: '50px', height: '50px' }}
                />
              </Button>
              <Typography textTransform="capitalize" variant="h5">
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Detail;
