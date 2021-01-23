import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const CircleContainer = styled.div`
  display: inline-block;
  border-radius: 100%;
  position: relative;`

const PercentageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center,`

const StyledCircle = styled.circle`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;`
// const CircleContainer = ({ children, style }) => <div className="react-super-progressbar__base" style={style}>{children}</div>
// const PercentageContainer = ({ children }) => <div className="react-super-progressbar__percentage-container">{children}</div>
// const StyledCircle = ({ children, ...props }) => <circle className="react-super-progressbar__styled-circle" {...props}>{children}</circle>

const GradientCircleProgressbar = ({
  percentage,
  width,
  strokeWidth,
  fontSize,
  fontColor,
  fontFamily,
  primaryColor,
  secondaryColor,
  fill,
  hidePercentageText,
  strokeLinecap,
}) => {
  const PI = 3.14
  const R = (width / 2) - (strokeWidth * 2)

  let circumference = 2 * PI * R
  let offset = circumference - percentage / 100 * circumference
  let gradientId = `${primaryColor[0]}${primaryColor[1]}`.replace(/#/g, '')

  return (
    <CircleContainer
      className="react-super-progressbar__base"
      style={{
        height: `${width}px`,
        width: `${width}px`,
      }}
    >
      {!hidePercentageText ?
        <PercentageContainer className="react-super-progressbar__percentage-container">
          <span
            className="react-super-progressbars__percentage"
            style={{
              fontSize,
              fontFamily,
              color: fontColor,
            }}
          >
            {percentage}%
          </span>
        </PercentageContainer>
        : null
      }

      <svg
        width='100%'
        height='100%'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <linearGradient
          id={gradientId}
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'
        >
          <stop offset='0%' stopColor={primaryColor[0]}/>
          <stop offset='100%' stopColor={primaryColor[1]}/>
        </linearGradient>
        <circle
          strokeWidth={strokeWidth}
          fill='transparent'
          r={R}
          cx={width / 2}
          cy={width / 2}
          stroke={secondaryColor}
          strokeDasharray={`${circumference} ${circumference}`}
        />
        <StyledCircle
          strokeWidth={strokeWidth}
          fill={fill}
          r={R}
          cx={width / 2}
          cy={width / 2}
          stroke={`url(#${gradientId})`}
          strokeLinecap={strokeLinecap}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
    </CircleContainer>
  )
}

GradientCircleProgressbar.propTypes = {
  percentage: PropTypes.number.isRequired,
  width: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeLinecap: PropTypes.oneOf(['round', 'square', 'butt']),
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  fontFamily: PropTypes.string,
  primaryColor: PropTypes.array,
  secondaryColor: PropTypes.string,
  fill: PropTypes.string,
  hidePercentageText: PropTypes.bool,
}

GradientCircleProgressbar.defaultProps = {
  width: 200,
  strokeWidth: 5,
  strokeLinecap: 'round',
  fontSize: 'inherit',
  fontColor: 'inherit',
  fontFamily: 'inherit',
  primaryColor: ['#00BBFF', '#92d7f1'],
  secondaryColor: 'transparent',
  fill: 'transparent',
}

export default GradientCircleProgressbar
