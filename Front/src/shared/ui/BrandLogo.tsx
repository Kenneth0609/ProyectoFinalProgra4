import { Box, Typography } from '@mui/material';

type BrandLogoProps = {
  compact?: boolean;
  markSize?: number;
  textSize?: number;
  showText?: boolean;
};

export const BrandLogo = ({
  compact = false,
  markSize = 42,
  textSize = 26,
  showText = true,
}: BrandLogoProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: compact ? 1.25 : 1.8, minWidth: 0 }}>
      <Box
        component="svg"
        viewBox="0 0 100 100"
        aria-label="Logo Restaurante"
        role="img"
        sx={{
          width: markSize,
          height: markSize,
          flex: '0 0 auto',
          filter: 'drop-shadow(0 10px 24px rgba(150,10,0,0.18))',
        }}
      >
        <circle cx="50" cy="50" r="43" fill="rgba(8,7,7,0.72)" stroke="#e51b22" strokeWidth="5" />
        <path
          d="M31 61c2-17 13-28 27-28s25 11 27 28"
          fill="none"
          stroke="#fff8f0"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path
          d="M25 69h57c4 0 7 2 8 6H17c1-4 4-6 8-6Z"
          fill="#fff8f0"
        />
        <path
          d="M29 75h51"
          fill="none"
          stroke="#e51b22"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          d="M50 32c5 0 8 3 8 7s-3 7-8 7-8-3-8-7 3-7 8-7Z"
          fill="#fff8f0"
        />
        <path
          d="M49 13c10 15-8 18-2 31M58 18c10 14-7 18-2 29M40 23c7 10-6 15-1 25"
          fill="none"
          stroke="#e51b22"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </Box>

      {showText && (
        <Box sx={{ display: 'flex', alignItems: 'baseline', minWidth: 0 }}>
          <Typography
            component="span"
            sx={{
              color: '#fff8f0',
              fontSize: textSize,
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: 0,
              textShadow: '0 2px 0 rgba(150,10,0,0.34)',
              whiteSpace: 'nowrap',
            }}
          >
            Restaurante
          </Typography>
          {!compact && (
            <Box
              component="span"
              sx={{
                width: Math.max(8, textSize * 0.45),
                height: 4,
                ml: 0.55,
                borderRadius: 999,
                backgroundColor: '#e51b22',
                transform: 'translateY(-0.35em)',
                flex: '0 0 auto',
              }}
            />
          )}
        </Box>
      )}
    </Box>
  );
};
