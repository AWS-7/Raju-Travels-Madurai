# Cloudflare CDN Configuration Guide

## Overview
This guide provides step-by-step instructions to configure Cloudflare CDN for the Blessings Tours & Travels website to improve performance and achieve 90+ Google PageSpeed score.

## Prerequisites
- Cloudflare account (Free or Pro plan)
- Domain name registered
- Website deployed and accessible

## Step 1: Add Website to Cloudflare

1. Log in to Cloudflare dashboard
2. Click "Add a Site"
3. Enter your domain name (e.g., blessingstoursandtravels.com)
4. Select Free plan
5. Click "Add Site"

## Step 2: Update DNS Records

1. Cloudflare will scan your existing DNS records
2. Review and confirm all DNS records
3. Change nameservers at your domain registrar to Cloudflare's nameservers:
   - ns1.cloudflare.com
   - ns2.cloudflare.com
4. Wait for DNS propagation (usually 24-48 hours)

## Step 3: Configure Caching Rules

### Browser Cache TTL
1. Go to Caching > Configuration
2. Set "Browser Cache TTL" to "Respect Existing Headers"
3. This allows the .htaccess cache headers to work

### Cache Level
1. Set "Cache Level" to "Standard"
2. This caches static content (CSS, JS, images)

### Edge Cache TTL
1. Set "Edge Cache TTL" to "2 hours"
2. This determines how long Cloudflare keeps content in their edge servers

## Step 4: Enable Auto Minify

1. Go to Speed > Optimization
2. Enable "Auto Minify" for:
   - JavaScript
   - CSS
   - HTML
3. This automatically minifies files for faster loading

## Step 5: Enable Brotli Compression

1. Go to Speed > Optimization
2. Enable "Brotli" compression
3. This provides better compression than gzip
4. Ensure "Gzip" is also enabled as fallback

## Step 6: Configure Page Rules

### Cache Static Assets
1. Go to Rules > Page Rules
2. Create new page rule:
   - URL: `*blessingstoursandtravels.com/*.webp`
   - Settings:
     - Cache Level: Cache Everything
     - Edge Cache TTL: 1 month
     - Browser Cache TTL: 1 year

3. Create another page rule:
   - URL: `*blessingstoursandtravels.com/*.css`
   - Settings:
     - Cache Level: Cache Everything
     - Edge Cache TTL: 1 month
     - Browser Cache TTL: 1 year

4. Create another page rule:
   - URL: `*blessingstoursandtravels.com/*.js`
   - Settings:
     - Cache Level: Cache Everything
     - Edge Cache TTL: 1 month
     - Browser Cache TTL: 1 year

### Cache Images
5. Create page rule:
   - URL: `*blessingstoursandtravels.com/*.jpg`
   - Settings:
     - Cache Level: Cache Everything
     - Edge Cache TTL: 1 month
     - Browser Cache TTL: 1 year

6. Create page rule:
   - URL: `*blessingstoursandtravels.com/*.png`
   - Settings:
     - Cache Level: Cache Everything
     - Edge Cache TTL: 1 month
     - Browser Cache TTL: 1 year

## Step 7: Enable Rocket Loader

1. Go to Speed > Optimization
2. Enable "Rocket Loader"
3. This automatically lazy loads JavaScript
4. Note: Test website functionality after enabling

## Step 8: Configure Security Headers

1. Go to SSL/TLS > Edge Certificates
2. Set SSL mode to "Full (strict)"
3. This ensures HTTPS is properly configured

## Step 9: Enable HTTP/3

1. Go to Network > Edge Certificates
2. Enable "HTTP/3 (QUIC)"
3. This provides faster connection establishment

## Step 10: Configure Image Optimization

### Polish Images
1. Go to Speed > Optimization
2. Enable "Polish" (requires Pro plan)
   - Automatically optimizes images
   - Converts to WebP format
   - Compresses images

### Basic Image Optimization (Free Plan)
1. Enable "Basic Image Optimization"
2. This provides basic image optimization

## Step 11: Configure Argo Smart Routing

1. Go to Network > Argo Smart Routing
2. Enable "Argo Smart Routing" (requires Pro plan)
3. This routes traffic through the fastest path

## Step 12: Test Performance

1. Use Google PageSpeed Insights: https://pagespeed.web.dev/
2. Test both mobile and desktop
3. Target score: 90+
4. Check Core Web Vitals:
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

## Step 13: Monitor Performance

1. Go to Analytics > Performance
2. Monitor:
   - Response time
   - Bandwidth saved
   - Cache hit rate
3. Adjust settings based on performance data

## Additional Optimization Tips

### 1. Enable Always Online
- Go to Caching > Configuration
- Enable "Always Online"
- Serves cached version when server is down

### 2. Configure Security Level
- Go to Security > Settings
- Set to "Medium" or "High"
- Protects against DDoS attacks

### 3. Enable Hotlink Protection
- Go to Caching > Configuration
- Enable "Hotlink Protection"
- Prevents other sites from using your images

### 4. Configure Firewall Rules
- Go to Security > WAF
- Add rules to block malicious traffic
- Protect against common attacks

## Troubleshooting

### Images Not Loading
- Check if WebP conversion is working
- Verify cache rules are correct
- Clear Cloudflare cache: Caching > Configuration > Purge Everything

### Slow Performance
- Check cache hit rate
- Verify compression is enabled
- Review page rules for conflicts

### SSL Issues
- Ensure SSL mode is set to "Full (strict)"
- Check SSL certificate validity
- Verify origin server has valid SSL

## Summary

After completing these steps, your website should:
- Load significantly faster
- Have better mobile performance
- Achieve 90+ Google PageSpeed score
- Handle more visitors efficiently
- Have improved Core Web Vitals
- Be protected against common attacks

## Next Steps

1. Deploy website to production
2. Configure Cloudflare as above
3. Test performance with Lighthouse
4. Monitor performance regularly
5. Adjust settings as needed
