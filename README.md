# fajarma-package

Personal package for fajarma.

## Installation

```bash
npm install fajarma-package
```

### DOM

- **canUseDOM**

```typescript
import canUseDOM from "fajarma-package/build/dom/canUseDOM";
...
canUseDOM && window.scroll(0, 100);
```

### JSON

- **jsonParse**

```typescript
import canUseDOM from "fajarma-package/build/json/jsonParse";
import type Data from "./types";
...
const response = jsonParse<Data>(data);
```

### Number

- **roundNumber**

```typescript
import roundNumber from "fajarma-package/build/number/roundNumber";
...
const number = 15.123456;
const rounded = roundNumber(15.123456, 0); // 15
const rounded2 = roundNumber(15.123456, 2); // 15.12
const rounded5 = roundNumber(15.123456, 5); // 15.12346
```

### Storage

- **getLS**

```typescript
import getLS from "fajarma-package/build/storage/getLS";
import type Data from "./types";
...
const data = getLS<Data>("ls_name");
```

- **setLS**

```typescript
import setLS from "fajarma-package/build/storage/setLS";
...
const data = {
  counter: "12345",
};
setLS("setLS", data);
```
