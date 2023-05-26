import React, { useEffect, useRef , useState} from 'react';
import { styled } from 'styled-components';

const RotatingStars = () => {
  const canvasRef = useRef(null);
  const w = window.innerWidth;
  const h = window.innerHeight;
  const arr = [];
  const u = 0;
  const dep = w;
  const dp = 0.70;
  const ms = {
    x: 0,
    y: 0
  };
  const msd = {
    x: 0,
    y: 0
  };

  function Obj(x, y, z) {
    this.set(x, y, z);
  }

  Obj.prototype = {
    set: function(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    },
    rotX: function(ang) {
      const y = this.y;
      const z = this.z;
      this.y = y * Math.cos(ang) - z * Math.sin(ang);
      this.z = z * Math.cos(ang) + y * Math.sin(ang);
    },
    rotY: function(ang) {
      const x = this.x;
      const z = this.z;
      this.x = x * Math.cos(ang) - z * Math.sin(ang);
      this.z = z * Math.cos(ang) + x * Math.sin(ang);
    },
    rotZ: function(ang) {
      const x = this.x;
      const y = this.y;
      this.x = x * Math.cos(ang) - y * Math.sin(ang);
      this.y = y * Math.cos(ang) + x * Math.sin(ang);
    }
  };

  function Part(x, y, z) {
    this.op = new Obj(x, y, z);
    this.rp = new Obj(x, y, z);
    this.rot = new Obj();
    this.vel = new Obj();
    this.col = 'hsla(216,95%,85%,' + rnd(0.5, 1) + ')';
  }

  function upd() {
    let pos;
    let rot;
    let vel;
    let op;
    let rp;
    let col;
    let size;
    for (let i in arr) {
      op = arr[i].op;
      rp = arr[i].rp;
      rot = arr[i].rot;
      vel = arr[i].vel;
      col = arr[i].col;
      vel.x += msd.x * 0.15;
      vel.y += msd.y * 0.15;
      rp.set(op.x, op.y, op.z);

      rot.x += vel.x;
      rot.y += vel.y;
      rot.z += vel.z;

      rot.x = rot.x > Math.PI * 2 ? 0 : rot.x;
      rot.y = rot.y > Math.PI * 2 ? 0 : rot.y;

      rp.rotY(rot.y);
      rp.rotX(rot.x);

      vel.set(
        vel.x * dp,
        vel.y * dp,
        0
      );
    }
    msd.x = 0.0005;
    msd.y = 0.0005;
  }

  function draw() {
    const c = canvasRef.current;
    const $ = c.getContext("2d");
    let p, dth;
    for (let i in arr) {
      p = arr[i];
      dth = ((p.rp.z / dep) + 1);
      $.fillStyle = p.col;
      $.fillRect(w + p.rp.x, h + p.rp.y, rnd(dth / 0.8, dth / 2), dth / 0.9);
    }
  }

  function rnd(min, max) {
    return Math.random() * (max - min) + min;
  }

  function go() {
    for (let i = 0; i < 6800; i++) {
      const d = new Part(
        rnd(-w, h),
        rnd(-w, h),
        rnd(-dep, dep)
      );
      d.vel.set(0, 0, 0);
      arr.push(d);
    }
  }

  useEffect(() => {
    const c = canvasRef.current;
    const $ = c.getContext("2d");
    let animationFrameId;

    c.width = window.innerWidth;
    c.height = window.innerHeight;
    function run() {
      $.clearRect(0, 0, w, h);
      const g_ = $.createLinearGradient(c.width + c.width,
        c.height + c.height * 1.5,
        c.width + c.width, 1);
      g_.addColorStop(0, 'hsla(253, 5%, 75%, 1)');
      g_.addColorStop(0.5, 'hsla(314, 95%, 10%, 1)');
      g_.addColorStop(0.8, 'hsla(259, 95%, 5%, 1)');
      g_.addColorStop(1, 'hsla(0, 0%, 5%, 1)');
      $.globalCompositeOperation = 'normal';
      $.fillStyle = g_;
      $.fillRect(0, 0, w, h);
      $.globalCompositeOperation = 'lighter';
      upd();
      draw();
      animationFrameId = window.requestAnimationFrame(run);
    }

    go();
    run();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);



  return <Canvas ref={canvasRef} />;
};

export default RotatingStars;

const Canvas = styled.canvas`
    position:absolute;
    z-index: -1;
    width:100%;
    height:100%;
    background: rgb(27,25,33);
background: linear-gradient(180deg, rgba(27,25,33,1) 0%, rgba(41,38,52,1) 61%, rgba(62,58,75,1) 100%);
`;
