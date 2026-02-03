## 8bitcn/ui

Accessible retro components that you can copy and paste into your apps. Free. Open Source.

Visit [cyphercn.com](https://cyphercn.com/)

[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=❤&logo=GitHub&color=#fe8e86)](https://github.com/sponsors/theorcdev)

![8bitcn UI Components](./public/assets/8bitcn-readme-showcase.png)

## Contributing

Please read the [contributing guide](/contributing.md).

### Usage Example

To add the `button` component to your project, run the following command:

```bash
pnpm dlx shadcn@latest add @cyphercn/button
```

Once installed, you can import and use the component in your files:

```typescript
import { Button } from "@/components/ui/cypher";

export default function App() {
  return <Button>Click me</Button>;
}
```

**Note:** The import path `@/components/ui/cypher` assumes your project has a path alias configured (common in Next.js and similar frameworks). Adjust the path to match your project's structure if needed.

<p align="center">
  <img src="./public/images/readme/8bitcn-button-example.png" alt="8bitcn Button example" />
</p>

## License

Licensed under the [MIT license](/license.md).

## Open Source Program

<a href="https://vercel.com/oss">
  <img alt="Vercel OSS Program" src="https://vercel.com/oss/program-badge.svg" />
</a>

## Star History

[![Star History](https://starchart.cc/theorcdev/8bitcn-ui.svg?variant=adaptive&line=%237fce00)](https://starchart.cc/theorcdev/8bitcn-ui)
